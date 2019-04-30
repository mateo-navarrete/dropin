//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { SignOut } from '../auth/SignOut';
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
      <SignOut handleClick={logoutUser} />
      <Divider />
      <List>
        {sections.map((text, index) => (
          <ListItem button key={text + index}>
            <ListItemIcon>
              {text === 'Privacy' ? (
                <VisibilityOff />
              ) : text === 'Default Duration' ? (
                <TimerIcon />
              ) : text === 'Blocked' ? (
                <BlockIcon />
              ) : (
                <SettingsIcon />
              )}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export const LoggedInMenu = withStyles(styles)(WrappedComponent);
