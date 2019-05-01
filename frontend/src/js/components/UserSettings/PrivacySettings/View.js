//jscs:disable requireShorthandArrowFunctions
import React, { Fragment as F } from 'react';
import {
  Collapse,
  ExpandLess,
  ExpandMore,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  VisibilityOff
} from '../../material';
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
          <VisibilityOff />
        </ListItemIcon>
        <ListItemText inset primary="Privacy" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText
              inset
              primary="allow users to search for my profile"
            />
          </ListItem>
        </List>
      </Collapse>
    </F>
  );
};

export const View = withStyles(styles)(WrappedComponent);
