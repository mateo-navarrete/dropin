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

export const deleteEvent  = (id) => dispatch => {
  console.log('hell2pay');
  deleteData(`/api/events/${id}`, res => {
    let handleres = () => {
      console.log(res);
    };
    console.log(handleres);
    // if(res.status ==="success"){
    //   console.log(res.status + ' #2');
    // }
  })
// deleteData(`/api/events/${id}`, res => {
//     console.log(res.status);
    // if(res.status ==="success"){
    //   dispatch(props.showModal)
    //   dispatch(getEvents());
    // }
  // })
}
