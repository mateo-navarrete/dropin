import { OPEN_BOTTOM_OVERLAY, CLOSE_BOTTOM_OVERLAY } from '../../constants';

const initState = {
  bottomOverlayVisible: false,
};

export const bottomOverlayReducer = (state = initState, action) => {
  let nextState;
  switch (action.type) {
    case OPEN_BOTTOM_OVERLAY:
      nextState = { ...state, bottomOverlayVisible: true };
      return nextState;
    case CLOSE_BOTTOM_OVERLAY:
      nextState = { ...state, bottomOverlayVisible: false };
      return nextState;
    default:
      return state;
  }
};
