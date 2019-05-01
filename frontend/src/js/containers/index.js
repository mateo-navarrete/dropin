import { withStyles } from '@material-ui/core/styles';
import {
  withAuth,
  withAuthUser,
  withDemoUser,
  withLogIn,
  withLogOut,
  withGetAuthStatus
} from './auth';
import { withGeolocation, withGetGeolocation, withUser } from './user';
import { withDimensions, withGetDimensions } from './utils';

export {
  withAuth,
  withAuthUser,
  withDemoUser,
  withLogIn,
  withDimensions,
  withGeolocation,
  withLogOut,
  withGetAuthStatus,
  withGetDimensions,
  withGetGeolocation,
  withUser,
  withStyles
};
