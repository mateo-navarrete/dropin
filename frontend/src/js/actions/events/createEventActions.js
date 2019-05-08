//jscs:disable requireShorthandArrowFunctions
import {
  CREATING_EVENT,
  GOT_CREATE_EVENT_ERROR,
  GOT_CREATE_EVENT_SUCCESS
} from '../../constants';
import { postData } from '../../utils';

const creatingEvent = () => {
  return { type: CREATING_EVENT };
};

const gotCreateEventError = err => {
  console.log('@gotCreateEventError', err);
  return { type: GOT_CREATE_EVENT_ERROR, payload: err };
};

const gotCreateEventSuccess = events => {
  return { type: GOT_CREATE_EVENT_SUCCESS, payload: events };
};

export const createEvent = (eventDetails) => dispatch => {
  dispatch(creatingEvent());
  // postData(`/api/events/user/${eventDetails.user_name}`)
  console.log('@createEvent', eventDetails);
  postData(`/api/events`, eventDetails)
    .then(res => {
      console.log('@res', res);
      // let userData = res.data.data[0];
      dispatch(gotCreateEventSuccess(res.data));
    })
    .catch(err => dispatch(gotCreateEventError(err)));
};
