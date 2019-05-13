//jscs:disable requireShorthandArrowFunctions
import {
  GETTING_EVENTS,
  GOT_EVENTS_ERROR,
  GOT_EVENTS_SUCCESS,
  GET_ADDRESS,
  SET_MARKER_TYPE
} from '../../constants';
import { getUserEvents } from '..'
import { getData, deleteData } from '../../utils';
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
  if(url) {
    console.log("Events Actions triggered", url)
    dispatch(gettingEvents());
    getData(`/api/events` + `/${url}/?lat=${latitude}&lon=${longitude}`)
      .then(res => dispatch(gotEventsSuccess(res.data.data)))
      .catch(err => dispatch(gotEventsError(err)));
  } else {
    console.log("Events Actions triggered", url)

    dispatch(gettingEvents());
    getData(`/api/events` + `/?lat=${latitude}&lon=${longitude}`)
      .then(res => dispatch(gotEventsSuccess(res.data.data)))
      .catch(err => dispatch(gotEventsError(err)));
  }
}

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

export const deleteEvent  = ({id, coords:{latitude, longitude}, user_name}) => dispatch => {
  console.log('delete');
  deleteData(`/api/events/${id}`)
  .then((res) => {
    if(res.data.status ==="success"){
      console.log(res.data.message);
      // console.log(coords);
      // dispatch(getEvents(url))
      //get all events again
    }
  })
  .then(() => {
          dispatch(
            getEvents({
              latitude: latitude,
              longitude: longitude,
            })
          );
          dispatch(getUserEvents({ user_name: user_name }));
        })
  .catch(err => dispatch(gotEventsError(err)));
// deleteData(`/api/events/${id}`, res => {
//     console.log(res.status);
    // if(res.status ==="success"){
    //   dispatch(props.showModal)
    //   dispatch(getEvents());
    // }
  // })
}
