//jscs:disable requireShorthandArrowFunctions
import {
  GETTING_EVENTS,
  GOT_EVENTS_ERROR,
  GOT_EVENTS_SUCCESS
} from '../../constants';
import { getData } from '../../utils';

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

export const getEvents = ({ url, latitude, longitude }) => dispatch => {
  // TODO: notPrivate
  let api = url ? url + '/' : '';
  dispatch(gettingEvents());
  getData(`/api/events/${api}?lat=${latitude}&lon=${longitude}`)
    .then(res => dispatch(gotEventsSuccess(res.data.data)))
    .catch(err => dispatch(gotEventsError(err)));
};
