import {
  SEND_USER,
  MODIFY_FIELD,
  ERROR_MESSAGE,
  ERROR_MESSAGE_TWO,
  VALIDATION_SIGNUP,
  VERIFY_CALLBACK,
} from 'src/actions/user';

export const initialState = {
  name: '',
  email: '',
  password: '',
  city: '',
  users: [],
  items: [],
  errorMessage: '',
  errorMessage2: '',
  validationSignup: false,
  signupMessage: 'Inscription confirmé, vous pouvez maintenant utiliser vos identifiants de connexion.',
  isVerified: false,
};

const register = (state = initialState, action = {}) => {
  switch (action.type) {
    case SEND_USER:
      return {
        ...state,
        [action.key]: action.value,
      };
    case MODIFY_FIELD:
      return {
        ...state,
        [action.key]: action.value,
      };
    case ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.value,
      };
    case ERROR_MESSAGE_TWO:
      return {
        ...state,
        errorMessage2: action.value,
      };
    case VALIDATION_SIGNUP:
      return {
        ...state,
        validationSignup: true,
      };
    case VERIFY_CALLBACK: {
      if (action.response) {
        return {
          ...state,
          isVerified: true,
        };
      }
    }
    default:
    return state;
  }
};

export default register;
