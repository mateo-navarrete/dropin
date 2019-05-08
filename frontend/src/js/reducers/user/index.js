import { combineReducers } from 'redux';
import { createEventReducer } from './createEventReducer';
import { geolocationReducer } from './geolocationReducer';
import { userEventsReducer } from './userEventsReducer';

export const userReducer = combineReducers({
  createEvent: createEventReducer,
  geolocation: geolocationReducer,
  events: userEventsReducer,
});
