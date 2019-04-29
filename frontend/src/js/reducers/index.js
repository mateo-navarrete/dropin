import { combineReducers } from 'redux';
import { authReducer } from './auth';
import { dimensionsReducer } from './utils';

export const rootReducer = combineReducers({
  auth: authReducer,
  dimensions: dimensionsReducer,
});
