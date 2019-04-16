import {
  GOT_USER_COORDS,
  CREATING_EVENT,
  CREATE_EVENT_ERROR,
  CREATED_EVENT,
  SET_CATEGORY,
  SET_PRIVACY,
  SET_EXPIRATION
  //   SET_PRIVACY,
  //   SET_NAME,
  //   SET_DESC,
  //   SET_EXP,
  //   CREATE_EVENT,
  //   CREATE_EVENT_ERROR,
  //   CREATED_EVENT
} from '../../constants';

const initState = {
  // visible: false,
  creating: false,
  category_id: 1, //drops? current? etc
  // user_id: 0, //userReducer
  // user_name: '', //userReducer
  latitude: 0, //userCoords
  longitude: 0, //userCoords
  display_user: true, //false,
  event_name: '',
  description: '',
  expiration_date: '', //2019-04-09 10:27:29.247613
};

export const eventReducer = (state = initState, action) => {
  let nextState;
  switch (action.type) {
    case GOT_USER_COORDS:
      const { latitude, longitude } = action.payload.coords;
      nextState = { ...state, latitude: latitude, longitude: longitude };
      // case OPEN_STEPPER_MODAL:
      //   // console.log(action);
      //   //TODO: add auto default here:
      //   nextState = { ...state };
      //   return nextState;
      // case CLOSE_STEPPER_MODAL:
      //   nextState = {
      //     ...state,
      //     // visible: false,
      //     category_id: 1,
      //     user_id: 0,
      //     latitude: 0,
      //     longitude: 0,
      //     display_user: false,
      //     event_name: '',
      //     description: '',
      //     expiration_date: '',
      //   };
      return nextState;
    case CREATING_EVENT:
      nextState = { ...state, creating: true };
      return nextState;
    case CREATE_EVENT_ERROR:
      nextState = { ...state, creating: false };
      return nextState;
    case CREATED_EVENT:
      console.log('@ccreated_event', action.payload);
      nextState = { ...state, creating: false };
      return nextState;
    case SET_CATEGORY:
      nextState = { ...state, category_id: action.payload };
      return nextState;
    case SET_PRIVACY:
      console.log('@eR sP', action.payload, state);
      nextState = { ...state, display_user: !action.payload ? false : true };
      return nextState;
    case SET_EXPIRATION:
      nextState = { ...state, expiration_date: action.payload };
      return nextState;
    default:
      return state;
  }
};
