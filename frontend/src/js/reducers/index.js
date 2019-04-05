import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { dropsReducer } from './dropsReducer';
import { userCoordsReducer } from './drops';

export const rootReducer = combineReducers({
  authReducer,
  dropsReducer,
  userCoordsReducer,
});
