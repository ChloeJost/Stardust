import {
  TOGGLE_OPEN_RIGHT,
  TOGGLE_OPEN_LEFT,
} from 'src/actions/nav';

export const initialState = {
  openLeft: false,
  openRight: false,
};

const nav = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_OPEN_RIGHT:
      return {
        ...state,
        openRight: !state.openRight,
      };
    case TOGGLE_OPEN_LEFT:
      return {
        ...state,
        openLeft: !state.openLeft,
      };
    default:
      return state;
  }
};

export default nav;
