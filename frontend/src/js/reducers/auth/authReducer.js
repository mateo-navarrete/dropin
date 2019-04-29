import { SET_AUTH_STATUS } from '../../constants';

const initState = {
  user: null,
};

export const authReducer = (state = initState, action) => {
  let nextState;
  switch (action.type) {
    case SET_AUTH_STATUS:
      nextState = {
        ...state,
        user: action.payload.user_name,
      };
      return nextState;
    default:
      return state;
  }
};
