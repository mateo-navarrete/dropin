import { combineReducers } from 'redux';
import { authReducer, userCoordsReducer } from './droppers';
import {
  dropsReducer,
  familyReducer,
  partyReducer,
  sportsReducer
} from './drops';
import {
  eventReducer,
  pinModalReducer,
  stepperModalReducer,
  bottomOverlayReducer,
  topOverlayReducer
} from './modals';
import { sizeReducer } from './utils';

export const rootReducer = combineReducers({
  authReducer,
  userCoordsReducer,
  dropsReducer,
  familyReducer,
  partyReducer,
  sportsReducer,
  eventReducer,
  pinModalReducer,
  stepperModalReducer,
  bottomOverlayReducer,
  topOverlayReducer,
  sizeReducer,
});
