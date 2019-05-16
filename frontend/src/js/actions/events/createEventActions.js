//jscs:disable requireShorthandArrowFunctions
import {
  CREATING_EVENT,
  GOT_CREATE_EVENT_ERROR,
  GOT_CREATE_EVENT_SUCCESS
} from '../../constants';
import { postData } from '../../utils';
import { getEvents, getUserEvents } from '..';
import Geocode from 'react-geocode';

const creatingEvent = () => {
  return { type: CREATING_EVENT };
};

const gotCreateEventError = err => {
  // console.log("@gotCreateEventError", err);
  return { type: GOT_CREATE_EVENT_ERROR, payload: err };
};

const gotCreateEventSuccess = events => {
  return { type: GOT_CREATE_EVENT_SUCCESS, payload: events };
};

export const createEvent = eventDetails => dispatch => {
  dispatch(creatingEvent());
  let newEventDetails;
  // postData(`/api/events/user/${eventDetails.user_name}`)
  // console.log("@createEvent", eventDetails);
  Geocode.setApiKey('AIzaSyB5uKfMriNA73mQgW_ZRelAixBLEdqT-Xg');
  Geocode.fromLatLng(`${eventDetails.latitude}`, `${eventDetails.longitude}`)
    .then(
      response => {
        let address = response.results[0].formatted_address;
        newEventDetails = { ...eventDetails, address: `${address}` };
      },

      error => {
        // console.error(error);
      }
    )
    .then(() => {
      postData(`/api/events`, newEventDetails)
        .then(res => {
          // console.log('@res', res);
          // let userData = res.data.data[0];
          dispatch(gotCreateEventSuccess(res.data));
        })
        .then(() => {
          dispatch(
            getEvents({
              latitude: newEventDetails.latitude,
              longitude: newEventDetails.longitude,
            })
          );
          dispatch(getUserEvents({ user_name: newEventDetails.user_name }));
        })
        .catch(err => dispatch(gotCreateEventError(err)));
    });
};
