import { withStyles } from '@material-ui/core/styles';
import {
  withAuth,
  withAuthUser,
  withDemoUser,
  withLogIn,
  withLogOut,
  withGetAuthStatus
} from './auth';
import { withEvents, withGetEvents } from './events';
import { withGeolocation, withGetGeolocation, withUser } from './user';
import {
  withDimensions,
  withGetDimensions,
  withToggleShowChildren
} from './utils';

export {
  withAuth,
  withAuthUser,
  withDemoUser,
  withDimensions,
  withEvents,
  withGetEvents,
  withGeolocation,
  withGetAuthStatus,
  withGetDimensions,
  withGetGeolocation,
  withLogIn,
  withLogOut,
  withStyles,
  withToggleShowChildren,
  withUser
};
