import axios from 'axios';

import {
  SEND_USER,
  errorMsg,
  errorMsg2,
  validationSignup,
} from 'src/actions/user';

const registerMiddleware = store => next => action => {
  switch (action.type) {
    case SEND_USER: {
      axios({
        method: 'post',
        url: 'http://localhost:5000/register',
        data: {
          name: store.getState().register.name,
          email: store.getState().register.email,
          password: store.getState().register.password,
          city: store.getState().register.city,
        },
      })
        .then(response => {
          console.log(response.data.token);
          store.dispatch(validationSignup());
        })
        .catch(error => {
          if (error.response) {
            const errorMessage = error.response.data.errors[0].msg;
            const errorMessage2 = error.response.data.errors[1].msg;

            store.dispatch(errorMsg(errorMessage));
            store.dispatch(errorMsg2(errorMessage2));
          }
        });
      next(action);
      break;
    }
    default:
      console.log('Je laisse passer cette action: ', action);
      next(action);
      break;
  }
};

export default registerMiddleware;
