import axios from 'axios';

import { CHANGE_USER_INFOS, updateUserInfos, DELETE_USER } from 'src/actions/user';

const userMiddleware = store => next => async action => {
  switch (action.type) {
    case CHANGE_USER_INFOS: {
      let userId = store.getState().auth.id;
      console.log(userId, "front");
      await axios({
        method: 'put',
        url: `http://localhost:5000/users/${userId}`,
        data: {
          name: store.getState().auth.newName,
        },
      })
        .then(response => {
          axios({
            method: 'get',
            url: `http://localhost:5000/users/${userId}`,
          })
          .then (response => {
          console.log(response.data.name, "middleware");
          const user = response.data.name;
          store.dispatch(updateUserInfos(user));
          })
          .catch(error => {
            console.log(error);
          })
        .catch(error => {
          console.log(error);
        });
})
      // je laisse passer tout de suite au middleware/reducer suivant
      next(action);
      break;
    }
    case DELETE_USER: {
      let userId = store.getState().auth.id;
      axios({
        method: 'delete',
        url:  `http://localhost:5000/users/${userId}`,
      })
        .then(response => {
          console.log(response.data);
          //store.dispatch(addUserInfos(user));
        })
        .catch(error => {
          console.log(error);
        });

      // je laisse passer tout de suite au middleware/reducer suivant
      next(action);
      break;
    }
    default:
      console.log('Je laisse passer cette action: ', action);
      next(action);
      break;
  }
};

export default userMiddleware;
