//jscs:disable requireShorthandArrowFunctions
import React from 'react';
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
import { withStyles } from '../../containers';

const styles = theme => ({
  root: {
    width: '95%',
    backgroundColor: theme.palette.background.paper,
  },
});

const WrappedComponent = ({ classes, name, ...props }) => {
  console.log('props', props);
  return (
    <List className={classes.root}>
      <ListItem>
        <IconButton aria-label="Update Photo">
          <Avatar>
            <PersonIcon />
          </Avatar>
        </IconButton>
        <ListItemText primary={name} secondary={`drops: ${name.length}`} />
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
