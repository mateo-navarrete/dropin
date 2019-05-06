import {
  GETTING_USER_COORDS,
  GOT_USER_COORDS,
  GOT_USER_COORDS_ERROR
} from '../../constants';

const gotUserCoordsError = err => {
  return { type: GOT_USER_COORDS_ERROR, payload: err };
};

const gotUserCoords = position => {
  return { type: GOT_USER_COORDS, payload: position };
};

const gettingUserCoords = () => {
  return { type: GETTING_USER_COORDS };
};

export const getUserCoords = () => dispatch => {
  dispatch(gettingUserCoords());
  window.navigator.geolocation.getCurrentPosition(position => {
    dispatch(gotUserCoords(position), gotUserCoordsError());
  });
};
