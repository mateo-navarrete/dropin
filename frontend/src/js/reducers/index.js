import { combineReducers } from 'redux';
import { eventsReducer } from './events';
import { authReducer, userCoordsReducer } from './users';
import { areaSizeReducer, overlayReducer } from './utils';

export const rootReducer = combineReducers({
  eventsReducer,
  authReducer,
  userCoordsReducer,
  areaSizeReducer,
  overlayReducer,
});
