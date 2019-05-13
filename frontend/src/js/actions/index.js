import {
  checkAuthStatus,
  createUser,
  loginUser,
  loginDemoUser,
  logoutUser
} from './auth';
import { createEvent, getEvents, getAddress, setMarkerType, deleteEvent } from './events';
import { getGeolocation, getUserEvents } from './user';
import { resizeDimensions } from './utils';

export {
  checkAuthStatus,
  createEvent,
  createUser,
  loginUser,
  loginDemoUser,
  logoutUser,
  getEvents,
  deleteEvent,
  setMarkerType,
  getGeolocation,
  getUserEvents,
  resizeDimensions,
  getAddress
};
