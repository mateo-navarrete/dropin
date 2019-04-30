import { combineReducers } from 'redux';
import { authReducer } from './auth';
import { eventsReducer } from './events';
import { userReducer } from './user';
import { dimensionsReducer } from './utils';

export const rootReducer = combineReducers({
  auth: authReducer,
  events: eventsReducer,
  dimensions: dimensionsReducer,
  user: userReducer,
});
