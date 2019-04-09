import { OPEN_PIN_MODAL, CLOSE_PIN_MODAL } from '../../constants';

const initState = {
  visible: false,
  event_id: 0,
};

export const pinModalReducer = (state = initState, action) => {
  let nextState;
  switch (action.type) {
    case OPEN_PIN_MODAL:
      console.log(action);
      nextState = { ...state, visible: true, event_id: action.payload };
      return nextState;
    case CLOSE_PIN_MODAL:
      nextState = { ...state, visible: false, event_id: 0 };
      return nextState;
    default:
      return state;
  }
};
