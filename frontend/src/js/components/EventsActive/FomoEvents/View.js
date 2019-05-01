//jscs:disable requireShorthandArrowFunctions
import React, { Fragment as F } from 'react';
import FomoIcon from '@material-ui/icons/AccessAlarm';
import { ListItem, ListItemIcon, ListItemText } from '../../material';
import { withStyles } from '../../../containers';

const styles = theme => ({
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

const WrappedComponent = ({ classes, handleClick, open }) => {
  return (
    <F>
      <ListItem button className={classes.nested} onClick={handleClick}>
        <ListItemIcon>
          <FomoIcon />
        </ListItemIcon>
        <ListItemText inset primary="Fomo" />
      </ListItem>
    </F>
  );
};

export const View = withStyles(styles)(WrappedComponent);
