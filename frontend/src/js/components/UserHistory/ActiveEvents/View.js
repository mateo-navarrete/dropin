//jscs:disable requireShorthandArrowFunctions
import React, { Fragment as F } from 'react';
import ActivePinIcon from '@material-ui/icons/WhereToVote';
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
          <ActivePinIcon />
        </ListItemIcon>
        <ListItemText inset primary="Active" />
      </ListItem>
    </F>
  );
};

export const View = withStyles(styles)(WrappedComponent);
