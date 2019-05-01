//jscs:disable requireShorthandArrowFunctions
import React from 'react';
// import { ExpansionPanels } from './ExpansionPanels';
// import { ExtraExpansion } from './ExtraExpansion';
// import { SignOut } from '../auth/SignOut';
import { UserProfile, UserMenuButtons, UserNestedList } from '../user';
import {
  BlockIcon,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  VisibilityOff,
  SettingsIcon,
  TimerIcon
} from '../material';
import { withStyles } from '../../containers';
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
  list: {
    width: 350, //250,
    [theme.breakpoints.up('310')]: {
      width: 310,
    },
    [theme.breakpoints.up('370')]: {
      width: 360,
    },
    [theme.breakpoints.up(400 + theme.spacing.unit)]: {
      width: 400,
    },
  },
});

const sections = ['Settings', 'Privacy', 'Default Duration', 'Blocked'];

const WrappedComponent = ({ classes, logoutUser, ...props }) => {
  return (
    <div className={classes.list}>
      <UserProfile />
      <Divider />
      <UserNestedList />
      <Divider />
      <UserMenuButtons />
      <Divider />
    </div>
  );
};
// <SignOut handleClick={logoutUser} />
// <ListItemText primary={text} />

export const LoggedInMenu = withStyles(styles)(WrappedComponent);
