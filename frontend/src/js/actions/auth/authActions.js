//jscs:disable requireShorthandArrowFunctions
import { SET_AUTH_STATUS } from '../../constants';
import { getUserEvents } from '..';
import { getData, postData } from '../../utils';

const setAuthStatus = authStatus => {
  return { type: SET_AUTH_STATUS, payload: authStatus };
};

export const checkAuthStatus = () => dispatch => {
  getData('/api/users/isLoggedIn')
    .then(res => {
      res.status === 200
        ? dispatch(handleAuthResponse(res.data))
        : console.log('TODO: handleAuthErrCodes', res);
    })
    .catch(err => console.log('TODO: handleAuthErrCodes', err));
};

const handleAuthResponse = user => dispatch => {
  dispatch(setAuthStatus(user));
  console.log("Handle Auth Reponse", user)
  if (user.user_name) dispatch(getUserEvents(user));
};

export const loginUser = ({ user_name, password }) => dispatch => {
  postData('/api/users/login', {
    user_name,
    password,
  })
    .then(res => {
      res.status === 200
        ? dispatch(checkAuthStatus())
        : console.log('TODO: handleLoginErrCodes', res);
    })
    .catch(err => {
      console.log('TODO: handleLoginErrCodes', err);
    });
};

const demoUser = { user_name: 'demo', password: 'abc123' };

export const loginDemoUser = () => dispatch => {
  dispatch(loginUser(demoUser));
};

export const createUser = userObj => dispatch => {
  // dispatch(creatingUser(userObj));
  // console.log('@authActions', userObj);
  // userObj.birthdate = '1990-01-01';
  postData('/api/users/new', userObj).then(res => {
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
  // sendEmail('/api/send', { userObj });
};

export const logoutUser = () => dispatch => {
  postData('/api/users/logout', null)
    .then(() => dispatch(checkAuthStatus()))
    .catch(err => console.log('TODO: handleErrCodes', err));
};
