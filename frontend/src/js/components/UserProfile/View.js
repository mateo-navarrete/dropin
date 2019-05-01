//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Avatar,
  EditIcon,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  PersonIcon
} from '../material';

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
            <PersonIcon />
          </Avatar>
        </IconButton>
        <ListItemText primary={name} secondary={`drops: ${events.length}`} />
        <ListItemSecondaryAction>
          <IconButton aria-label="Edit Profile">
            <EditIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
};

export const View = withStyles(styles)(WrappedComponent);
