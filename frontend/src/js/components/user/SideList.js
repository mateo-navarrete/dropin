//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import {
  Divider,

  // InboxIcon,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,

  // MailIcon,
  // HourGlassIcon,
  // HotIcon,
  // SearchIcon,
  // FavoriteIcon,
  // DropinEventIcon,
  // DropinUserIcon,
  LogInIcon,
  SignUpIcon

  // BlockIcon,
  // PrivateIcon,
  // SettingsIcon,
  // TimerIcon,
  // DropinHistoryIcon
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

const section1 = ['Log In'];
const section2 = ['Sign Up'];

const Wrapper = ({ classes, ...props }) => {
  return (
    <div className={classes.list}>
      <List>
        {section1.map((text, index) => (
          <ListItem button key={text + index}>
            <ListItemIcon>
              <LogInIcon />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {section2.map((text, index) => (
          <ListItem button key={text + index}>
            <ListItemIcon>
              <SignUpIcon />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export const SideList = withStyles(styles)(Wrapper);
