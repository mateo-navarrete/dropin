//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '../material';
import { withStyles } from '../../containers';

const styles = theme => ({
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

const WrappedComponent = ({ classes, children, handleClick, primaryText }) => {
  return (
    <ListItem button className={classes.nested} onClick={handleClick}>
      {children ? <ListItemIcon>{children}</ListItemIcon> : ''}
      <ListItemText primary={primaryText} />
    </ListItem>
  );
};

export const ChildListItem = withStyles(styles)(WrappedComponent);
