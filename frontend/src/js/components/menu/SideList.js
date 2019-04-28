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
  HourGlassIcon,
  HotIcon,
  SearchIcon,
  FavoriteIcon,
  DropinEventIcon,
  DropinUserIcon,
  BlockIcon,
  PrivateIcon,
  SettingsIcon,
  TimerIcon,
  DropinHistoryIcon
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

const section1 = ['Search', 'Newest', 'Trending'];

const section2 = ['Favorites', 'Recent', 'Topics', 'Users'];

const section3 = ['Drop History', 'Last Dropped'];

const section4 = ['Settings', 'Privacy', 'Default Duration', 'Blocked'];

const Wrapper = ({ classes, ...props }) => {
  return (
    <div className={classes.list}>
      <List>
        {section1.map((text, index) => (
          <ListItem button key={text + index}>
            <ListItemIcon>
              {text === 'Trending' ? (
                <HotIcon />
              ) : text === 'Search' ? (
                <SearchIcon />
              ) : (
                <HourGlassIcon />
              )}
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
              {text === 'Favorites' ? (
                <FavoriteIcon />
              ) : text === 'Recent' ? (
                <HourGlassIcon />
              ) : text === 'Topics' ? (
                <DropinEventIcon />
              ) : (
                <DropinUserIcon />
              )}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {section3.map((text, index) => (
          <ListItem button key={text + index}>
            <ListItemIcon>
              {text === 'Last Dropped' ? (
                <HourGlassIcon />
              ) : (
                <DropinHistoryIcon />
              )}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {section4.map((text, index) => (
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

export const SideList = withStyles(styles)(Wrapper);
