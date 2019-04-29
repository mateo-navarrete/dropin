//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { DefaultLogOutButton } from '.';
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  BlockIcon,
  PrivateIcon,
  SettingsIcon,
  TimerIcon
} from '../../material';
import { withStyles } from '../../../containers';

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

const section2 = ['Settings', 'Privacy', 'Default Duration', 'Blocked'];

const Wrapper = ({ classes, logoutUser, ...props }) => {
  return (
    <div className={classes.list}>
      <DefaultLogOutButton handleClick={logoutUser} />
      <Divider />
      <List>
        {section2.map((text, index) => (
          <ListItem button key={text + index}>
            <ListItemIcon>
              {text === 'Privacy' ? (
                <PrivateIcon />
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

export const LoggedInSideList = withStyles(styles)(Wrapper);
