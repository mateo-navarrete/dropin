//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  SearchIcon
} from '../material';
import { withStyles } from '../../containers';

const styles = theme => ({
  root: {
    width: '95%',
    backgroundColor: theme.palette.background.paper,
  },
});

const WrappedComponent = ({ classes, name, events, ...props }) => {
  return (
    <List className={classes.root}>
      <ListItem>
        <IconButton aria-label="Update Photo">
          <Avatar>
            <SearchIcon />
          </Avatar>
        </IconButton>
        <ListItemText primary={'SEARCH'} />
      </ListItem>
    </List>
  );
};

export const View = withStyles(styles)(WrappedComponent);
