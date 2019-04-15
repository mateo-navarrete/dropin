import { combineReducers } from 'redux';
// import { authReducer, userCoordsReducer } from './droppers';
// import {
//   dropsReducer,
//   familyReducer,
//   partyReducer,
//   sportsReducer
// } from './drops';
// import {
//   eventReducer,
//   pinModalReducer,
//   stepperModalReducer,
//   bottomOverlayReducer,
//   topOverlayReducer
// } from './modals';
import { eventsReducer } from './events';
import { userCoordsReducer } from './users';
import { areaSizeReducer } from './utils';

export const rootReducer = combineReducers({
  // authReducer,
  // userCoordsReducer,
  // dropsReducer,
  // familyReducer,
  // partyReducer,
  // sportsReducer,
  // eventReducer,
  // pinModalReducer,
  // stepperModalReducer,
  // bottomOverlayReducer,
  // topOverlayReducer,
  eventsReducer,
  userCoordsReducer,
  areaSizeReducer,
});
