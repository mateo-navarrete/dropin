//jscs:disable requireShorthandArrowFunctions
import {
  GETTING_EVENTS,
  GOT_EVENTS_ERROR,
  GOT_EVENTS_SUCCESS
} from '../../constants';
import { getData, deleteData } from '../../utils';

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

export const getEvents = ({url, latitude, longitude}) => dispatch => {
  // TODO: byRadius & notPrivate
  if(url) {
    dispatch(gettingEvents());
    getData(`/api/events` + `/${url}/?lat=${latitude}&lon=${longitude}`)
      .then(res => dispatch(gotEventsSuccess(res.data.data)))
      .catch(err => dispatch(gotEventsError(err)));
  } else {
    dispatch(gettingEvents());
    getData(`/api/events` + `/?lat=${latitude}&lon=${longitude}`)
      .then(res => dispatch(gotEventsSuccess(res.data.data)))
      .catch(err => dispatch(gotEventsError(err)));
  }

};

export const deleteEvent  = (id, url) => dispatch => {
  console.log('delete');
  deleteData(`/api/events/${id}`)
  .then((res) => {
    if(res.data.status ==="success"){
      console.log(res.data.message);
      dispatch(getEvents(url))
      //hide Modal Box
      //get all events again
    }
  })
// deleteData(`/api/events/${id}`, res => {
//     console.log(res.status);
    // if(res.status ==="success"){
    //   dispatch(props.showModal)
    //   dispatch(getEvents());
    // }
  // })
}
