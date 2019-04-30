import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import PersonIcon from '@material-ui/icons/Person';
import WorkIcon from '@material-ui/icons/Work';
import EditIcon from '@material-ui/icons/Edit';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { IconButton, ListItemIcon } from '../material';
import { withUser } from '../../containers';

const styles = theme => ({
  root: {
    width: '95%',
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

function FolderList(props) {
  const { classes, name, events } = props;
  // console.log(props);
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
          <IconButton aria-label="Edit Profile" >
            <EditIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
}

FolderList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export const UserProfile = withStyles(styles)(withUser(FolderList));
