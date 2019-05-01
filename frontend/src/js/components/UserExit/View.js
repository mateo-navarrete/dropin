//jscs:disable requireShorthandArrowFunctions
import React, { Fragment as F } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TimerIcon,
  VisibilityOff
} from '../material';
import { ExtraExpansion } from '../LoggedIn/ExtraExpansion';

const styles = theme => ({
  root: {
    width: '95%',
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

const sections = ['Privacy', 'Default Duration'];

const WrappedComponent = ({ classes, name, events, ...props }) => {
  return (
    <F>
      <List>
        {sections.map((section, index) => (
          <ListItem button key={section + index}>
            <ListItemIcon>
              {section === 'Privacy' ? <VisibilityOff /> : <TimerIcon />}
            </ListItemIcon>
            <ListItemText>
              <ExtraExpansion />
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </F>
  );
};

export const View = withStyles(styles)(WrappedComponent);

// <List className={classes.root}>
//   <ListItem>
//     <IconButton aria-label="Update Photo">
//       <Avatar>
//         <PersonIcon />
//       </Avatar>
//     </IconButton>
//     <ListItemText primary={name} secondary={`drops: ${events.length}`} />
//     <ListItemSecondaryAction>
//       <IconButton aria-label="Edit Profile">
//         <EditIcon />
//       </IconButton>
//     </ListItemSecondaryAction>
//   </ListItem>
// </List>
