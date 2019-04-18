import { combineReducers } from 'redux';
import { eventReducer, eventsReducer } from './events';
import { authReducer, userCoordsReducer } from './users';
import { areaSizeReducer, overlayReducer } from './utils';

export const rootReducer = combineReducers({
  eventReducer,
  eventsReducer,
  authReducer,
  userCoordsReducer,
  areaSizeReducer,
  overlayReducer,
});
