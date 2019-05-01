//jscs:disable requireShorthandArrowFunctions
import React, { Fragment as F } from 'react';
import { DropinEventIcon, ListItem, ListItemIcon, ListItemText } from '../../material';
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
          <DropinEventIcon />
        </ListItemIcon>
        <ListItemText inset primary="Drop Tags" />
      </ListItem>
    </F>
  );
};

export const View = withStyles(styles)(WrappedComponent);
