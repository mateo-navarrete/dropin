// import { AUTH_ERROR, AUTH_USER, AUTHORIZE_USER } from '../constants';

// Latitude, Longitude
// 40.743431, -73.938770

const initState = {
  drop: 'Education',
  coords: [
    { latitude: 40.742878, longitude: -73.941538 },
    { latitude: 40.74317, longitude: -73.943458 },
    { latitude: 40.743665, longitude: -73.940997 },
  ],
};

export const educationReducer = (state = initState, action) => {
  // let nextState;
  switch (action.type) {
    default:
      return state;
  }
};
