import {
  GETTING_USER_EVENTS,
  GOT_USER_EVENTS_ERROR,
  GOT_USER_EVENTS_SUCCESS
} from '../../constants';

const initState = {
  events: [],
  errMsg: '',
  loading: false,
};

export const userEventsReducer = (state = initState, action) => {
  let nextState;
  switch (action.type) {
    case GETTING_USER_EVENTS:
      nextState = { ...state, errMsg: '', loading: true };
      return nextState;
    case GOT_USER_EVENTS_ERROR:
      console.log('@GotUserEventsErr_Reducer');
      nextState = { ...state, errMsg: action.payload, loading: false };
      return nextState;
    case GOT_USER_EVENTS_SUCCESS:
      nextState = {
        ...state,
        events: action.payload,
        errMsg: '',
        loading: false,
      };
      return nextState;
    default:
      return state;
  }
};
