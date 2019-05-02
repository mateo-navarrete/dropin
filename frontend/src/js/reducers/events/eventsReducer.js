import {
  GETTING_EVENTS,
  GOT_EVENTS_ERROR,
  GOT_EVENTS_SUCCESS
} from '../../constants';

const initState = {
  eventsList: [],
  errMsg: '',
  loading: false,
};

export const eventsReducer = (state = initState, action) => {
  let nextState;
  switch (action.type) {
    case GETTING_EVENTS:
      nextState = { ...state, errMsg: '', loading: true };
      return nextState;
    case GOT_EVENTS_ERROR:
      console.log('@GotEventsErr_Reducer');
      nextState = { ...state, errMsg: action.payload, loading: false };
      return nextState;
    case GOT_EVENTS_SUCCESS:
      nextState = {
        ...state,
        eventsList: action.payload,
        errMsg: '',
        loading: false,
      };
      return nextState;
    default:
      return state;
  }
};
