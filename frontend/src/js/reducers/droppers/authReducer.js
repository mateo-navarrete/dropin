import {
  SET_USERNAME,
  SET_PASSWORD_DIGEST,
  SET_BIRTHDATE,
  SHOW_SIGNUP_FORM,
  CREATING_USER,
  SET_LOGIN,
  GET_AUTH_STATUS,
  SET_AUTH_STATUS
  // AUTH_ERROR, AUTH_USER, AUTHORIZE_USER
} from '../../constants';

const initState = {
  auid: 0,
  authname: '',
  waiting: false,
  showSignupForm: true,
  user_name: '',
  password: '',
  birth_date: '', //format ?
  userObj: {},
  loginObj: {},
  authStatus: {},
};

export const authReducer = (state = initState, action) => {
  let nextState;
  switch (action.type) {
    case SET_USERNAME:
      nextState = {
        ...state,
        user_name: action.payload,
      };
      return nextState;
    case SET_PASSWORD_DIGEST:
      nextState = {
        ...state,
        password: action.payload,
      };
      return nextState;
    case SET_BIRTHDATE:
      nextState = {
        ...state,
        birthdate: action.payload,
      };
      return nextState;
    case SHOW_SIGNUP_FORM:
      nextState = {
        ...state,
        showSignupForm: action.payload,
      };
      return nextState;
    case CREATING_USER:
      nextState = {
        ...state,
        userObj: action.payload,
      };
      return nextState;
    case SET_LOGIN:
      nextState = {
        ...state,
        loginObj: action.payload,
      };
      return nextState;
    case SET_AUTH_STATUS:
      nextState = {
        ...state,
        authStatus: action.payload,
      };
      return nextState;
    case GET_AUTH_STATUS:
      nextState = {
        ...state,
        authStatus: action.payload,
      };
      return nextState;
    // case AUTHORIZE_USER:
    //   nextState = {
    //     ...state,
    //     waiting: true,
    //     auid: action.payload.auid,
    //   };
    //   return nextState;
    // case AUTH_ERROR:
    //   console.log('err', action.payload);
    //   nextState = { ...state, waiting: false };
    //   return nextState;
    // case AUTH_USER:
    //   nextState = {
    //     ...state,
    //     waiting: false,
    //     authname: action.payload.user_name,
    //   };
    //   return nextState;
    default:
      return state;
  }
};
