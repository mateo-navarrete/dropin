/* eslint-disable no-unused-vars */

import {
  SET_USERNAME,
  SET_PASSWORD_DIGEST,
  SET_BIRTHDATE,
  SHOW_SIGNUP_FORM,
  CREATING_USER,
  SET_LOGIN,
  GET_AUTH_STATUS,
  SET_AUTH_STATUS,
  HIDE_SIGNIN,
  HIDE_SIGNUP,
  SHOW_SIGNIN,
  SHOW_SIGNUP
  // AUTH_ERROR, AUTH_USER, AUTHORIZE_USER
} from '../../constants';
import { getData, postData, sendEmail } from '../../utils';
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

const setLogin = loginObj => {
  return { type: SET_LOGIN, payload: loginObj };
};

export const hideSignin = () => {
  return { type: HIDE_SIGNIN };
};

export const hideSignup = () => {
  return { type: HIDE_SIGNUP };
};

export const showSignin = () => {
  return { type: SHOW_SIGNIN };
};

export const showSignup = () => {
  return { type: SHOW_SIGNUP };
};

// const userLogin = ({ user_name, password }) => dispatch => {
export const loginUser = ({ user_name, password }) => dispatch => {
  // Auth.authenticateUser(user_name);
  postData('/api/users/login', { user_name, password }, () => {
    Auth.authenticateUser(user_name);
    dispatch(checkAuthStatus());
    dispatch(
      setAuthStatus({
        isLoggedIn: Auth.isUserAuthenticated(), // format ?
        user_name: user_name, //user_name
        password: password, //password
      })
    );
    if (Auth.isUserAuthenticated()) dispatch(setLogin({ user_name, password }));
  });
};

export const createUser = userObj => dispatch => {
  dispatch(creatingUser(userObj));
  console.log('@authActions', userObj);
  // userObj.birthdate = '1990-01-01';
  postData('/api/users/new', userObj, res => {
    // res.data; //.username
    // console.log('@frontend createUser res', res);
    // dispatch(userLogin(userObj));
    //TODO: LOGIN USER HERE
    dispatch(loginUser(userObj));
    // ? dispatch(authUser(res.data))
    // : dispatch(authError(res.data));
    //NOTE: dispatch(toggleSignUpFormVisible)
  });
  //NOTE
  sendEmail('/api/send', { userObj });
};

export const logoutUser = () => dispatch => {
  postData('/api/users/logout', null, () => {
    // console.log('@frontend logoutUser');
    //NOTE handle this dispatch
    // dispatch(Auth.deauthenticateUser()).then(() => {
    //   dispatch(checkAuthStatus());
    // });
    Auth.deauthenticateUser();
    dispatch(checkAuthStatus());
  });
};

export const checkAuthStatus = () => dispatch => {
  dispatch(getAuthStatus);

  getData('/api/users/isLoggedIn', res => {
    // console.log('cas@@@', res, res.user_name);
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
        // console.log('@res.user_name');
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
