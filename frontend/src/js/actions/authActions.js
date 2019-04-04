import { AUTH_ERROR, AUTH_USER, AUTHORIZE_USER } from '../constants';
import { getData } from '../utils';

const authError = err => {
  return { type: AUTH_ERROR, payload: err };
};

const authorizeUser = auid => {
  return { type: AUTHORIZE_USER, payload: auid };
};

const authUser = user => {
  return { type: AUTH_USER, payload: user };
};

export const getAuthUser = api => dispatch => {
  dispatch(authorizeUser({ auid: api }));
  getData('/api/users/' + (api || ''), res => {
    res.data.username
      ? dispatch(authUser(res.data))
      : dispatch(authError(res.data));
  });
};
