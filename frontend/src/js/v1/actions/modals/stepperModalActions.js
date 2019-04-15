import { OPEN_STEPPER_MODAL, CLOSE_STEPPER_MODAL } from '../../constants';

export const openStepperModal = value => {
  // console.log('@osm', value);
  return { type: OPEN_STEPPER_MODAL, payload: value };
};

export const closeStepperModal = () => {
  return { type: CLOSE_STEPPER_MODAL };
};
