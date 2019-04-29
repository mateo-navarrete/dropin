import {
  GETTING_GEOLOCATION,
  GOT_GEOLOCATION_ERROR,
  GOT_GEOLOCATION_SUCCESS
} from '../../constants';

const initState = {
  coords: {},
  errMsg: '',
  loading: false,
  timestamp: 0,
};

export const geolocationReducer = (state = initState, action) => {
  let nextState;
  switch (action.type) {
    case GETTING_GEOLOCATION:
      nextState = { ...state, errMsg: '', loading: true };
      return nextState;
    case GOT_GEOLOCATION_ERROR:
      console.log('@GotGeolocationErr_Reducer');
      nextState = { ...state, errMsg: action.payload, loading: false };
      return nextState;
    case GOT_GEOLOCATION_SUCCESS:
      const { coords, timestamp } = action.payload;
      nextState = {
        ...state,
        coords: coords,
        errMsg: '',
        loading: false,
        timestamp: timestamp,
      };
      return nextState;
    default:
      return state;
  }
};
