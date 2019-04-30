import { combineReducers } from 'redux';
import { geolocationReducer } from './geolocationReducer';
import { userEventsReducer } from './userEventsReducer';

export const userReducer = combineReducers({
  geolocation: geolocationReducer,
  events: userEventsReducer,
});
