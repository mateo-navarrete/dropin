import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { dropsReducer } from './dropsReducer';

export const rootReducer = combineReducers({
  authReducer,
  dropsReducer,
});
