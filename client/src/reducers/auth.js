import
{
  ADD_USER_INFOS,
  EMPTY_USER,
  TOGGLE_OPEN_MODIFY,
  CHANGE_USER_INFOS,
  MODIFY_FIELD,
  UPDATE_USER_INFOS,
  DELETE_USER,
} from 'src/actions/user';

export const initialState = {
  toggleOpen: false,
  newName: '',
};

const auth = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_USER_INFOS:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        city: action.payload.city,
        id: action.payload.id,
      };
    case CHANGE_USER_INFOS:
      return {
        ...state,
        newName: action.newName,
      };
    case TOGGLE_OPEN_MODIFY:
      return {
        ...state,
        toggleOpen: !state.toggleOpen,
      };
    case MODIFY_FIELD:
      return {
        ...state,
        [action.key]: action.value,
      };
    case UPDATE_USER_INFOS:
      return {
        ...state,
        name: action.name,
      };
    case DELETE_USER:
      return {};
    case EMPTY_USER:
      return {};
    default:
      return state;
  }
};

export default auth;
