import {
  GOT_USER_COORDS_ERROR,
  GOT_USER_COORDS,
  GETTING_USER_COORDS
} from '../../constants';
// import { getData } from '../utils';

const gotUserCoordsError = err => {
  return { type: GOT_USER_COORDS_ERROR, payload: err };
};

// const gotUserCoords = ({ coords }) => {
//   return { type: GOT_USER_COORDS, payload: coords };
// };

const gotUserCoords = position => {
  return { type: GOT_USER_COORDS, payload: position };
};

const gettingUserCoords = () => {
  return { type: GETTING_USER_COORDS };
};

export const getUserCoords = () => dispatch => {
  // dispatch(authorizeUser({ auid: api }));
  dispatch(gettingUserCoords());
  window.navigator.geolocation.getCurrentPosition(
    // gotUserCoords,
    position => {
      dispatch(gotUserCoords(position));
    },

    gotUserCoordsError
  );

  // getData('/api/users/' + (api || ''), res => {
  //   res.data.username
  //     ? dispatch(authUser(res.data))
  //     : dispatch(authError(res.data));
  // });
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
