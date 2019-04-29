//jscs:disable requireShorthandArrowFunctions
import {
  GETTING_GEOLOCATION,
  GOT_GEOLOCATION_ERROR,
  GOT_GEOLOCATION_SUCCESS
} from '../../constants';

const gettingGeolocation = () => {
  return { type: GETTING_GEOLOCATION };
};

const gotGeolocationError = err => {
  return { type: GOT_GEOLOCATION_ERROR, payload: err };
};

const gotGeolocationSuccess = position => {
  return { type: GOT_GEOLOCATION_SUCCESS, payload: position };
};

export const getGeolocation = () => async dispatch => {
  dispatch(gettingGeolocation());
  window.navigator.geolocation.getCurrentPosition(
    position => {
      dispatch(gotGeolocationSuccess(position));
    },

    error => {
      if (error.code === 1) {
        dispatch(gotGeolocationError(error));
      } else {
        console.log('TODO: handleGeolocationErrCodes', error);
      }
    }
  );
};
