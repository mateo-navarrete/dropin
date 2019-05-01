//jscs:disable requireShorthandArrowFunctions
import React, { Fragment as F } from 'react';
import NewPinIcon from '@material-ui/icons/Assistant';
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
          <NewPinIcon />
        </ListItemIcon>
        <ListItemText inset primary="Just Dropped" />
      </ListItem>
    </F>
  );
};

export const View = withStyles(styles)(WrappedComponent);
