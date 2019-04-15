import { OPEN_PIN_MODAL, CLOSE_PIN_MODAL } from '../../constants';

export const openPinModal = event_id => {
  // console.log('@opm', event_id);
  return { type: OPEN_PIN_MODAL, payload: event_id };
};

export const closePinModal = () => {
  return { type: CLOSE_PIN_MODAL };
};
