import { OPEN_BOTTOM_OVERLAY, CLOSE_BOTTOM_OVERLAY } from '../../constants';

const initState = {
  visible: false,
};

export const bottomOverlayReducer = (state = initState, action) => {
  let nextState;
  switch (action.type) {
    case OPEN_BOTTOM_OVERLAY:
      nextState = { ...state, visible: true };
      return nextState;
    case CLOSE_BOTTOM_OVERLAY:
      nextState = { ...state, visible: false };
      return nextState;
    default:
      return state;
  }
};
