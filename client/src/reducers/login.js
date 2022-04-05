import { CHANGE_VALUE, LOGOUT, LOGIN } from 'src/actions/user';

export const initialState = {
  email: '',
  password: '',
  isLogged: false,
};

const login = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLogged: true,
      };
    case CHANGE_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case LOGOUT:
      return {
        ...state,
        isLogged: false,
      };
    default:
      return state;
  }
};

export default login;
