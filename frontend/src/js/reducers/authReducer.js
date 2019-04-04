import { AUTH_ERROR, AUTH_USER, AUTHORIZE_USER } from '../constants';

const initState = {
  auid: 0,
  authname: '',
  waiting: false,
};

export const authReducer = (state = initState, action) => {
  let nextState;
  switch (action.type) {
    case AUTHORIZE_USER:
      nextState = {
        ...state,
        waiting: true,
        auid: action.payload.auid,
      };
      return nextState;
    case AUTH_ERROR:
      console.log('err', action.payload);
      nextState = { ...state, waiting: false };
      return nextState;
    case AUTH_USER:
      nextState = {
        ...state,
        waiting: false,
        authname: action.payload.username,
      };
      return nextState;
    default:
      return state;
  }
};
