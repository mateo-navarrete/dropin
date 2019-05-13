//jscs:disable requireShorthandArrowFunctions
import {
  GETTING_EVENTS,
  GOT_EVENTS_ERROR,
  GOT_EVENTS_SUCCESS,
  GET_ADDRESS,
  SET_MARKER_TYPE
} from '../../constants';
import { getData } from '../../utils';
import Geocode from 'react-geocode';

export const setMarkerType = markerType => {
  return { type: SET_MARKER_TYPE, payload: markerType };
};

const gettingEvents = () => {
  return { type: GETTING_EVENTS };
};

const gotEventsError = err => {
  console.log('@gotEventsError', err);
  return { type: GOT_EVENTS_ERROR, payload: err };
};

const gotEventsSuccess = events => {
  return { type: GOT_EVENTS_SUCCESS, payload: events };
};

const get_address = address => {
  return { type: GET_ADDRESS, payload: address };
};

export const getEvents = ({ url, latitude, longitude }) => dispatch => {
  // TODO: byRadius & notPrivate
  let api = url ? url + '/' : '';
  dispatch(gettingEvents());
  getData(`/api/events/${api}?lat=${latitude}&lon=${longitude}`)
    .then(res => dispatch(gotEventsSuccess(res.data.data)))
    .catch(err => dispatch(gotEventsError(err)));
};

export const getAddress = ({ latitude, longitude }) => dispatch => {
  Geocode.setApiKey('AIzaSyB5uKfMriNA73mQgW_ZRelAixBLEdqT-Xg');
  Geocode.fromLatLng(`${latitude}`, `${longitude}`).then(
    response => {
      let address = response.results[0].formatted_address;
      dispatch(get_address(address));
    },

    error => {
      console.error(error);
    }
  );
};
