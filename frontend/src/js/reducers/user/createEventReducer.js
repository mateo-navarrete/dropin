import {
  CREATING_EVENT,
  GOT_CREATE_EVENT_ERROR,
  GOT_CREATE_EVENT_SUCCESS
} from '../../constants';

const initState = {
  errMsg: '',
  creatingEvent: false,
};

export const createEventReducer = (state = initState, action) => {
  let nextState;
  switch (action.type) {
    case CREATING_EVENT:
      nextState = { ...state, errMsg: '', creatingEvent: true };
      return nextState;
    case GOT_CREATE_EVENT_ERROR:
      console.log('@GotCreateEventErr_Reducer');
      nextState = { ...state, errMsg: action.payload, creatingEvent: false };
      return nextState;
    case GOT_CREATE_EVENT_SUCCESS:
      nextState = {
        ...state,
        errMsg: '',
        creatingEvent: false,
      };
      return nextState;
    default:
      return state;
  }
};
