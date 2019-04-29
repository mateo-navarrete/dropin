//jscs:disable requireShorthandArrowFunctions
import { SET_AUTH_STATUS } from '../../constants';
import { getData, postData } from '../../utils';

const setAuthStatus = authStatus => {
  return { type: SET_AUTH_STATUS, payload: authStatus };
};

export const checkAuthStatus = () => dispatch => {
  getData('/api/users/isLoggedIn')
    .then(res => {
      res.status === 200
        ? dispatch(setAuthStatus(res.data))
        : console.log('TODO: handleErrCodes', res);
    })
    .catch(err => console.log('TODO: handleErrCodes', err));
};

export const loginUser = ({ user_name, password }) => dispatch => {
  postData('/api/users/login', {
    user_name,
    password,
  })
    .then(() => dispatch(checkAuthStatus()))
    .catch(err => console.log('TODO: handleErrCodes', err));
};

const demoUser = { user_name: 'demo', password: 'abc123' };

export const loginDemoUser = () => dispatch => {
  dispatch(loginUser(demoUser));
};

export const logoutUser = () => dispatch => {
  postData('/api/users/logout', null)
    .then(() => dispatch(checkAuthStatus()))
    .catch(err => console.log('TODO: handleErrCodes', err));
};
