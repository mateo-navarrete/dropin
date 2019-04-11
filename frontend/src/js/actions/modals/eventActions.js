import {
  CREATING_EVENT,
  CREATED_EVENT,
  CREATE_EVENT_ERROR
} from '../../constants';
import { postData } from '../../utils';

// const gotUserCoordsError = err => {
//   return { type: GOT_USER_COORDS_ERROR, payload: err };
// };

// const gotUserCoords = ({ coords }) => {
//   return { type: GOT_USER_COORDS, payload: coords };
// };

// const gotUserCoords = position => {
//   return { type: GOT_USER_COORDS, payload: position };
// };

const creatingEvent = () => {
  return { type: CREATING_EVENT };
};

const createdEvent = data => {
  return { type: CREATED_EVENT, payload: data };
};

const createEventError = err => {
  return { type: CREATE_EVENT_ERROR, payload: err };
};

export const createEvent = eventObj => dispatch => {
  // dispatch(authorizeUser({ auid: api }));
  dispatch(creatingEvent());
  postData('/api/events/', eventObj, res => {
    res.status === 'success'
      ? dispatch(createdEvent(res))
      : dispatch(createEventError(res));
  });
  // window.navigator.geolocation.getCurrentPosition(
  //   // gotUserCoords,
  //   position => {
  //     dispatch(gotUserCoords(position));
  //   },
  //
  //   gotUserCoordsError
  // );
};

// export const getGeolocation = () => async dispatch => {
//   const geolocation = navigator.geolocation;
//   geolocation.getCurrentPosition(
//     position => {
//       dispatch({ type: GET_GEOLOCATION, payload: position.coords });
//     },
//     error => {
//       if (error.code === 1) {
//         dispatch({ type: GEOLOCATION_DENIED, payload: false });
//       }
//     }
//   );
// };

// export function getLocation() {
//   return dispatch => {
//     const geolocation = navigator.geolocation;
//     geolocation.getCurrentPosition(position => {
//       console.log(position.coords);
//       dispatch({
//         type: GET_LOCATION,
//         payload: position,
//       });
//     });
//   };
// }
