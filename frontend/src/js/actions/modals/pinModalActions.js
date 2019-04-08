import { OPEN_PIN_MODAL, CLOSE_PIN_MODAL } from '../../constants';

export const openPinModal = () => {
  return { type: OPEN_PIN_MODAL };
};

export const closePinModal = () => {
  return { type: CLOSE_PIN_MODAL };
};
