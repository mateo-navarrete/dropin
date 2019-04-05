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
  userCoords: { latitude: 40.753431, longitude: -73.95877 },
};

export const userCoordsReducer = (state = initState, action) => {
  // let nextState;
  switch (action.type) {
    default:
      return state;
  }
};
