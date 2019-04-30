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
  DropinHistoryIcon
} from '../material';
import { DropsFilterView } from '../user/DropsFilterView';
import { FavoritesView } from '../user/FavoritesView';
import { DropHistoryView } from '../user/DropHistoryView';
import { MenuButtons } from '../user/MenuButtons';
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

const section1 = ['Search'];

const section2 = ['Newest', 'Expiring Soon', 'Trending'];

const section3 = ['Favorites', 'Recent', 'Topics', 'Users'];

const section4 = ['Drop History', 'Last Dropped'];

const Wrapper = ({ classes, ...props }) => {
  return (
    <div className={classes.list}>
      <List>
        {section1.map((text, index) => (
          <ListItem button key={text + index}>
            <ListItemIcon>
              <SearchIcon />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <DropsFilterView />
      <Divider />
      <FavoritesView />
      <Divider />
      <DropHistoryView />
      <Divider />
      <MenuButtons />
      <Divider />
    </div>
  );
};

export const SideList = withStyles(styles)(Wrapper);
