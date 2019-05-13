import {
  CREATING_EVENT,
  CREATED_EVENT,
  CREATE_EVENT_ERROR,
  DELETE_EVENT,
  SET_CATEGORY,
  SET_PRIVACY,
  SET_EXPIRATION
} from '../../constants';
import { postData, deleteData, editData } from '../../utils';

import { getEvents } from './eventsActions';

import { hideTopOverlay, showBottomOverlay } from '../utils'

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

const eventDelete = () => {
  return { type: DELETE_EVENT };
}

// const pad = num => ('00' + num).slice(-2);

export const createEvent = eventObj => dispatch => {
  // let date = new Date();
  // date =
  //   date.getUTCFullYear() +
  //   '-' +
  //   pad(date.getUTCMonth() + 1) +
  //   '-' +
  //   pad(date.getUTCDate()) +
  //   ' ' +
  //   pad(date.getUTCHours()) +
  //   ':' +
  //   pad(date.getUTCMinutes()) +
  //   ':' +
  //   pad(date.getUTCSeconds());
  //
  // let d = new Date()
  //   .toISOString()
  //   // .toLocaleString()
  //   .slice(0, 19)
  //   // .slice(0, 23)
  //   .replace('T', ' ');
  //
  // console.log('@config', eventObj, date, d);
  let page =
    +eventObj.category_id === 1
      ? 'family'
      : +eventObj.category_id === 2
      ? 'party'
      : 'sports';
  //TODO: refactor!
  window.location.assign(`/${page}`);
  console.log('@@@', eventObj);
  dispatch(creatingEvent());
  // console.log(eventObj);
  postData('/api/events/', eventObj, res => {
    res.status === 'success'
      ? dispatch(createdEvent(res))
      : dispatch(createEventError(res));
  });
};

// export const deleteEvent  = (id, category, category_id) => dispatch => {
//   deleteData(`/api/events/${id}`, res => {
//     console.log(res.status);
//     if(res.status ==="success"){
//       dispatch(hideTopOverlay());
//       dispatch(getEvents({id: category_id, name: category}));
//     }
//   })
// }

export const editEvent = (id) => dispatch =>{
  dispatch(showBottomOverlay(id))
}

export const reportEvent = (id) => dispatch =>{
  dispatch()
  // editData(`/api/events/${eventObj}`, res =>{
  //   if(res.status ==="successs"){
  //     console.log(res)
  //   }
  // })
}
