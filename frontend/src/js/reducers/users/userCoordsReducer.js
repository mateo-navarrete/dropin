import {
  GETTING_USER_COORDS,
  GOT_USER_COORDS,
  GOT_USER_COORDS_ERROR
} from '../../constants';

const initState = {
  loading: false,
  coords: {},
  timestamp: 0,
};

export const userCoordsReducer = (state = initState, action) => {
  let nextState;
  switch (action.type) {
    case GETTING_USER_COORDS:
      nextState = { ...state, loading: true };
      return nextState;
    case GOT_USER_COORDS_ERROR:
      nextState = { ...state, loading: false };
      return nextState;
    case GOT_USER_COORDS:
      const { coords, timestamp } = action.payload;
      nextState = {
        ...state,
        loading: false,
        coords: coords,
        timestamp: timestamp,
      };
      return nextState;
    default:
      return state;
  }
};
