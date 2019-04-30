import React, { Fragement as F } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import PersonIcon from '@material-ui/icons/Person';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import { withUser } from '../../containers';
import {
  BlockIcon,
  Divider,
  ListItemIcon,
  VisibilityOff,
  SettingsIcon,
  TimerIcon
} from '../material';
import { ExtraExpansion } from '../LoggedIn/ExtraExpansion';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

const sections = ['Privacy', 'Default Duration'];

function FolderList(props) {
  const { classes, name, events } = props;
  // console.log(props);
  return (
    <F>
      <List>
        {sections.map((text, index) => (
          <ListItem button key={text + index}>
            <ListItemIcon>
              {text === 'Privacy' ? <VisibilityOff /> : <TimerIcon />}
            </ListItemIcon>
            <ListItemText>
              <ExtraExpansion />
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </F>
  );
}
//
// <List className={classes.root}>
//   <ListItem>
//     <Avatar>
//       <PersonIcon />
//     </Avatar>
//     <ListItemText primary={name} secondary={`drops: ${events.length}`} />
//   </ListItem>
// </List>

FolderList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export const UserDefaults = withStyles(styles)(withUser(FolderList));
