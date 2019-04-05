import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { dropsReducer } from './dropsReducer';
import {
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
  userCoordsReducer
} from './drops';

export const rootReducer = combineReducers({
  authReducer,
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
  userCoordsReducer,
});
