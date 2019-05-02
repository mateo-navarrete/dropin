import {
  SET_USERNAME,
  SET_PASSWORD_DIGEST,
  SET_BIRTHDATE,
  SHOW_SIGNUP_FORM,
  CREATING_USER,
  SET_LOGIN,
  GET_AUTH_STATUS,
  SET_AUTH_STATUS,
  // HIDE_SIGNIN,
  // HIDE_SIGNUP,
  SHOW_SIGNIN,
  SHOW_SIGNUP,
  HIDE_BOTTOM_OVERLAY,
  HIDE_MUST_BE_18,
  // SHOW_MUST_BE_18
  // AUTH_ERROR, AUTH_USER, AUTHORIZE_USER
} from '../../constants';

const initState = {
  auid: 0,
  authname: '',
  waiting: false,
  showSignupForm: true,
  user_name: null,
  password: '',
  birth_date: '', //format ?
  isLoggedIn: false,
  userObj: {},
  loginObj: {},
  authStatus: {},
  signin: false,
  signup: false,
  isUnder18: true,
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
      const { isLoggedIn, user_name } = action.payload;
      nextState = {
        ...state,
        isLoggedIn: isLoggedIn,
        user_name: user_name,
        // authStatus: action.payload,
      };
      return nextState;
    case GET_AUTH_STATUS:
      console.log('@getAuthStatus reducer');
      nextState = {
        ...state,
        authStatus: action.payload,
      };
      return nextState;
    // case HIDE_SIGNIN:
    //   nextState = {
    //     ...state,
    //     signin: false,
    //   };
    //   return nextState;
    // case HIDE_SIGNUP:
    //   nextState = {
    //     ...state,
    //     signup: false,
    //   };
    //   return nextState;
    case HIDE_BOTTOM_OVERLAY:
      nextState = {
        ...state,
        signin: false,
        signup: false,
      };
      return nextState;
    case SHOW_SIGNIN:
      nextState = {
        ...state,
        signin: true,
      };
      return nextState;
    case SHOW_SIGNUP:
      nextState = {
        ...state,
        signup: true,
      };
      return nextState;
    case HIDE_MUST_BE_18:
      nextState = {
        ...state,
        isUnder18: false,
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
