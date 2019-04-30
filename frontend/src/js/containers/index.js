import { withStyles } from '@material-ui/core/styles';
import { withAuth, withDemoUser, withGetAuthStatus } from './auth';
import { withGeolocation, withGetGeolocation, withUser } from './user';
import { withDimensions, withGetDimensions } from './utils';

export {
  withAuth,
  withDemoUser,
  withDimensions,
  withGeolocation,
  withGetAuthStatus,
  withGetDimensions,
  withGetGeolocation,
  withUser,
  withStyles
};
