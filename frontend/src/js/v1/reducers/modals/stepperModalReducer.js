import { OPEN_STEPPER_MODAL, CLOSE_STEPPER_MODAL } from '../../constants';

const initState = {
  visible: false,
  category_id: 1, //drops? current? etc
  user_id: 0, //userReducer
  latitude: 0, //userCoords
  longitude: 0, //userCoords
  display_user: false,
  event_name: '',
  description: '',
  expiration_date: '', //2019-04-09 10:27:29.247613
};

export const stepperModalReducer = (state = initState, action) => {
  let nextState;
  switch (action.type) {
    case OPEN_STEPPER_MODAL:
      // console.log(action);
      //TODO: add auto default here:
      nextState = { ...state, visible: true };
      return nextState;
    case CLOSE_STEPPER_MODAL:
      nextState = {
        ...state,
        visible: false,
        category_id: 1,
        user_id: 0,
        latitude: 0,
        longitude: 0,
        display_user: false,
        event_name: '',
        description: '',
        expiration_date: '',
      };
      return nextState;
    default:
      return state;
  }
};
