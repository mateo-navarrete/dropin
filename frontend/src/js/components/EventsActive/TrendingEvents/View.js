//jscs:disable requireShorthandArrowFunctions
import React, { Fragment as F } from 'react';
import { HotIcon, ListItem, ListItemIcon, ListItemText } from '../../material';
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
          <HotIcon />
        </ListItemIcon>
        <ListItemText inset primary="Trending" />
      </ListItem>
    </F>
  );
};

export const View = withStyles(styles)(WrappedComponent);
