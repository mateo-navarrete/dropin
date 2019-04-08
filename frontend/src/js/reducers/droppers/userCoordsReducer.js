import {
  GOT_USER_COORDS_ERROR,
  GOT_USER_COORDS,
  GETTING_USER_COORDS
} from '../../constants';

const initState = {
  loading: false,
  coords: {},
  userCoords: { latitude: 0, longitude: 0 },
  timestamp: 0,
  // userCoords: { latitude: 40.753431, longitude: -73.95877 },
};

export const userCoordsReducer = (state = initState, action) => {
  let nextState;
  switch (action.type) {
    case GETTING_USER_COORDS:
      nextState = { ...state, loading: true };
      return nextState;
    case GOT_USER_COORDS:
      const { coords, timestamp } = action.payload;
      nextState = {
        ...state,
        loading: false,
        coords: coords,
        timestamp: timestamp,
        userCoords: { latitude: coords.latitude, longitude: coords.longitude },
      };
      return nextState;
    case GOT_USER_COORDS_ERROR:
      nextState = { ...state, loading: false };
      return nextState;
    default:
      return state;
  }
};
