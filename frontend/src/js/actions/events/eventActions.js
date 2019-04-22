import {
  CREATING_EVENT,
  CREATED_EVENT,
  CREATE_EVENT_ERROR,
  SET_CATEGORY,
  SET_PRIVACY,
  SET_EXPIRATION
} from '../../constants';
import { postData } from '../../utils';

export const setCategory = category_id => {
  return { type: SET_CATEGORY, payload: category_id };
};

export const setPrivacy = display_user => {
  return { type: SET_PRIVACY, payload: display_user };
};

export const setExpiration = expiration_date => {
  return { type: SET_EXPIRATION, payload: expiration_date };
};

const creatingEvent = () => {
  return { type: CREATING_EVENT };
};

const createdEvent = data => {
  return { type: CREATED_EVENT, payload: data };
};

const createEventError = err => {
  return { type: CREATE_EVENT_ERROR, payload: err };
};

const pad = num => ('00' + num).slice(-2);

export const createEvent = eventObj => dispatch => {
  let date = new Date();
  date =
    date.getUTCFullYear() +
    '-' +
    pad(date.getUTCMonth() + 1) +
    '-' +
    pad(date.getUTCDate()) +
    ' ' +
    pad(date.getUTCHours()) +
    ':' +
    pad(date.getUTCMinutes()) +
    ':' +
    pad(date.getUTCSeconds());

  let d = new Date()
    .toISOString()
    // .toLocaleString()
    .slice(0, 19)
    // .slice(0, 23)
    .replace('T', ' ');

  console.log('@config', eventObj, date, d);
  dispatch(creatingEvent());
  // console.log(eventObj);
  postData('/api/events/', eventObj, res => {
    res.status === 'success'
      ? dispatch(createdEvent(res))
      : dispatch(createEventError(res));
  });
};
