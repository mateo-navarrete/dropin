import {
  GOT_FAMILY_ERROR,
  GOT_FAMILY_PINS,
  GETTING_FAMILY_PINS
} from '../../constants';
// Latitude, Longitude
// 40.743431, -73.938770
// 40.742878, -73.941538
// 40.743203, -73.942879
// 40.743170, -73.943458
// 40.743487, -73.939252
// 40.742633, -73.940853
// 40.743665, -73.940997
// 40.744681, -73.939323

const initState = {
  drop: 'Family',
  coords: [
    // { latitude: 40.742878, longitude: -73.941538 },
    // { latitude: 40.74317, longitude: -73.943458 },
    // { latitude: 40.743487, longitude: -73.939252 },
    // { latitude: 40.742633, longitude: -73.940853 },
    // { latitude: 40.744681, longitude: -73.939323 },
  ],
  loading: false,
};

export const familyReducer = (state = initState, action) => {
  let nextState;
  switch (action.type) {
    case GETTING_FAMILY_PINS:
      nextState = { ...state, loading: true };
      return nextState;
    case GOT_FAMILY_ERROR:
      nextState = { ...state, loading: false };
      return nextState;
    case GOT_FAMILY_PINS:
      // console.log('@', action.payload);
      nextState = { ...state, loading: false, coords: action.payload };
      return nextState;
    default:
      return state;
  }
};
