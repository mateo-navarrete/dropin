import { OPEN_PIN_MODAL, CLOSE_PIN_MODAL } from '../../constants';

const initState = {
  visible: false,
};

export const pinModalReducer = (state = initState, action) => {
  let nextState;
  switch (action.type) {
    case OPEN_PIN_MODAL:
      nextState = { ...state, visible: true };
      return nextState;
    case CLOSE_PIN_MODAL:
      nextState = { ...state, visible: false };
      return nextState;
    default:
      return state;
  }
};
