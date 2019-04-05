// import { AUTH_ERROR, AUTH_USER, AUTHORIZE_USER } from '../constants';

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
    { latitude: 40.743431, longitude: -73.93877 },
    { latitude: 41.543431, longitude: -72.53877 },
  ],
};

export const familyReducer = (state = initState, action) => {
  // let nextState;
  switch (action.type) {
    default:
      return state;
  }
};
