import { combineReducers } from 'redux';
import { authReducer, userCoordsReducer } from './droppers';
import {
  dropsReducer,
  educationReducer,
  entertainmentReducer,
  familyReducer,
  foodReducer,
  gamingReducer,
  humanitarianReducer,
  musicReducer,
  partyReducer,
  religiousReducer,
  sportsReducer
} from './drops';
import { pinModalReducer } from './modals';

export const rootReducer = combineReducers({
  authReducer,
  userCoordsReducer,
  dropsReducer,
  educationReducer,
  entertainmentReducer,
  familyReducer,
  foodReducer,
  gamingReducer,
  humanitarianReducer,
  musicReducer,
  partyReducer,
  religiousReducer,
  sportsReducer,
  pinModalReducer,
});
