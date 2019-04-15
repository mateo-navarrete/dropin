import {
  HIDE_BOTTOM_OVERLAY,
  HIDE_TOP_OVERLAY,
  SHOW_BOTTOM_OVERLAY,
  SHOW_TOP_OVERLAY
} from '../../constants';

const initState = {
  bottomOverlay: false,
  topOverlay: false,
};

export const overlayReducer = (state = initState, action) => {
  let nextState;
  switch (action.type) {
    case HIDE_BOTTOM_OVERLAY:
      nextState = { ...state, bottomOverlay: false };
      return nextState;
    case HIDE_TOP_OVERLAY:
      nextState = { ...state, topOverlay: false };
      return nextState;
    case SHOW_BOTTOM_OVERLAY:
      nextState = { ...state, bottomOverlay: true };
      return nextState;
    case SHOW_TOP_OVERLAY:
      nextState = { ...state, topOverlay: true };
      return nextState;
    default:
      return state;
  }
};
