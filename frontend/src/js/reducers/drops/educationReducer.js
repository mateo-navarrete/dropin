import {
  GOT_EDUCATION_ERROR,
  GOT_EDUCATION_PINS,
  GETTING_EDUCATION_PINS
} from '../../constants';

// Latitude, Longitude
// 40.743431, -73.938770

const initState = {
  drop: 'Education',
  coords: [
    // { latitude: 40.742878, longitude: -73.941538 },
// { latitude: 40.74317, longitude: -73.943458 },
// { latitude: 40.743665, longitude: -73.940997 },

  ],
  loading: false,
};

export const educationReducer = (state = initState, action) => {
  let nextState;
  switch (action.type) {
    case GETTING_EDUCATION_PINS:
      nextState = { ...state, loading: true };
      return nextState;
    case GOT_EDUCATION_ERROR:
      nextState = { ...state, loading: false };
      return nextState;
    case GOT_EDUCATION_PINS:
      // console.log('@', action.payload);
      nextState = { ...state, loading: false, coords: action.payload };
      return nextState;
    default:
      return state;
  }
};
