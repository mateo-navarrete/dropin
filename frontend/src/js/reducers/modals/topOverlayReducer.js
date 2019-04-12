import { OPEN_TOP_OVERLAY, CLOSE_TOP_OVERLAY } from '../../constants';

const initState = {
  topOverlayVisible: false,
  coordsId: '',
  eventId: 0,
};

export const topOverlayReducer = (state = initState, action) => {
  let nextState;
  switch (action.type) {
    case OPEN_TOP_OVERLAY:
      nextState = {
        ...state,
        topOverlayVisible: true,
        coordsId: action.payload,
      };
      return nextState;
    case CLOSE_TOP_OVERLAY:
      nextState = { ...state, topOverlayVisible: false, coordsId: '' };
      return nextState;
    default:
      return state;
  }
};
