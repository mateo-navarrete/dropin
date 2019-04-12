import {
  SET_USERNAME,
  SET_PASSWORD_DIGEST,
  SET_BIRTHDATE,
  SHOW_SIGNUP_FORM,
  CREATING_USER,
  GET_AUTH_STATUS,
  SET_AUTH_STATUS
  // AUTH_ERROR, AUTH_USER, AUTHORIZE_USER
} from '../../constants';
import { getData, postData } from '../../utils';
import Auth from '../../utils/Auth';

const setUsername = username => {
  return { type: SET_USERNAME, payload: username };
};

const setPasswordDigest = passwordDigest => {
  return { type: SET_PASSWORD_DIGEST, payload: passwordDigest };
};

const setBirthdate = birth_date => {
  return { type: SET_BIRTHDATE, payload: birth_date };
};

const showSignupForm = formStatus => {
  return { type: SHOW_SIGNUP_FORM, payload: formStatus };
};

const creatingUser = userObj => {
  return { type: CREATING_USER, payload: userObj };
};

const getAuthStatus = authStatus => {
  return { type: GET_AUTH_STATUS, payload: authStatus };
};

const setAuthStatus = authStatus => {
  return { type: SET_AUTH_STATUS, payload: authStatus };
};

const userLogin = ({ user_name, password_digest }) => dispatch => {
  Auth.authenticateUser(user_name);
  postData('/api/users/login', { user_name, password_digest }, () => {
    dispatch(checkAuthStatus());
    dispatch(
      setAuthStatus({
        isLoggedIn: Auth.isUserAuthenticated(), // format ?
        user_name: user_name, //user_name
        password_digest: password_digest, //password_digest
      })
    );
  });
};

export const createUser = userObj => dispatch => {
  dispatch(creatingUser(userObj));
  userObj.birthdate = '1990-01-01';
  postData('/api/users/new', userObj, res => {
    // res.data; //.username
    console.log('@createUser res.data', res);
    dispatch(userLogin(userObj));
    // ? dispatch(authUser(res.data))
    // : dispatch(authError(res.data));
    //NOTE: dispatch(toggleSignUpFormVisible)
  });
};

export const logoutUser = () => dispatch => {
  // dispatch(logginoutUser);

  postData('/api/users/logout', null, res => {
    console.log('@logoutUser', res.data);
    dispatch(Auth.deauthenticateUser()).then(() => {
      dispatch(checkAuthStatus());
    });
  });
};

export const checkAuthStatus = () => dispatch => {
  dispatch(getAuthStatus);

  getData('/api/users/isLoggedIn', res => {
    console.log('cas@@@', res);
    // if (res.data.user_name === Auth.getToken()) {
    if (res.user_name === Auth.getToken()) {
      dispatch(
        setAuthStatus({
          isLoggedIn: Auth.isUserAuthenticated(),
          user_name: Auth.getToken(),
        })
      );
    } else {
      // if (res.data.user_name) {
      if (res.user_name) {
        dispatch(logoutUser());
      } else {
        Auth.deauthenticateUser();
      }
    }
  });

  // res.data; //.username
  // console.log('@checkAuthStatus res.data', res.data);
  // ? dispatch(authUser(res.data))
  // : dispatch(authError(res.data));
  //NOTE: dispatch(toggleSignUpFormVisible)
  // });
};

// const authError = err => {
//   return { type: AUTH_ERROR, payload: err };
// };
//
// const authorizeUser = auid => {
//   return { type: AUTHORIZE_USER, payload: auid };
// };
//
// const authUser = user => {
//   return { type: AUTH_USER, payload: user };
// };
//
// export const getAuthUser = api => dispatch => {
//   dispatch(authorizeUser({ auid: api }));
//   getData('/api/users/' + (api || ''), res => {
//     res.data.username
//       ? dispatch(authUser(res.data))
//       : dispatch(authError(res.data));
//   });
// };
