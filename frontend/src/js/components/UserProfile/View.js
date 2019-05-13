//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import {
  Avatar,
  // EditIcon,
  IconButton,
  List,
  ListItem,
  // ListItemSecondaryAction,
  ListItemText,
  PersonIcon
} from '../material';
import { withStyles } from '../../containers';

const styles = theme => ({
  root: {
    width: '95%',
    backgroundColor: theme.palette.background.paper,
  },
});

const WrappedComponent = ({ classes, name, userHistory, ...props }) => {
  return (
    <List className={classes.root}>
      <ListItem>
        <IconButton aria-label="Update Photo">
          <Avatar>
            <PersonIcon />
          </Avatar>
        </IconButton>
        <ListItemText
          primary={name.toUpperCase()}
          secondary={`drops: ${userHistory.length}`}
        />
      </ListItem>
    </List>
  );
};

export const View = withStyles(styles)(WrappedComponent);
