import { withStyles } from '@material-ui/core/styles';
import { withAuth, withDemoUser, withGetAuthStatus } from './auth';
import { withGeolocation, withGetGeolocation } from './user';
import { withDimensions, withGetDimensions } from './utils';

export {
  withAuth,
  withDemoUser,
  withDimensions,
  withGeolocation,
  withGetAuthStatus,
  withGetDimensions,
  withGetGeolocation,
  withStyles
};
