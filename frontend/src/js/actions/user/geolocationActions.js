//jscs:disable requireShorthandArrowFunctions
import {
  GETTING_GEOLOCATION,
  GOT_GEOLOCATION_ERROR,
  GOT_GEOLOCATION_SUCCESS
} from '../../constants';
import { getEvents } from '..';

const gettingGeolocation = () => {
  return { type: GETTING_GEOLOCATION };
};

const gotGeolocationError = err => {
  return { type: GOT_GEOLOCATION_ERROR, payload: err };
};

const gotGeolocationSuccess = position => {
  return { type: GOT_GEOLOCATION_SUCCESS, payload: position };
};

const handleGeolocationSuccess = position => dispatch => {
  let eventObj = {
    url: "",
    latitude: position.coords.latitude,
    longitude: position.coords.longitude
  }
  dispatch(gotGeolocationSuccess(position));
  dispatch(getEvents(eventObj)); // TODO byRadius & notPrivate
};

export const getGeolocation = () => async dispatch => {
  dispatch(gettingGeolocation());
  window.navigator.geolocation.getCurrentPosition(
    position => {
      dispatch(handleGeolocationSuccess(position));
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
