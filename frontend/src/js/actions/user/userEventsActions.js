//jscs:disable requireShorthandArrowFunctions
import {
  GETTING_USER_EVENTS,
  GOT_USER_EVENTS_ERROR,
  GOT_USER_EVENTS_SUCCESS
} from '../../constants';
import { getData } from '../../utils';

const gettingUserEvents = () => {
  return { type: GETTING_USER_EVENTS };
};

const gotUserEventsError = err => {
  // console.log('@gotUserEventsError', err);
  return { type: GOT_USER_EVENTS_ERROR, payload: err };
};

const gotUserEventsSuccess = events => {
  return { type: GOT_USER_EVENTS_SUCCESS, payload: events };
};

export const getUserEvents = ({ user_name }) => dispatch => {
  dispatch(gettingUserEvents());
  getData(`/api/events/user/${user_name}`)
    .then(res => {
      // console.log("get user events", res.data.data[0])
      let userData = res.data.data[0];
      dispatch(gotUserEventsSuccess(userData));
    })
    .catch(err => dispatch(gotUserEventsError(err)));
};
