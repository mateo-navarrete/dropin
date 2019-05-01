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
  TimerIcon
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
          <TimerIcon />
        </ListItemIcon>
        <ListItemText inset primary="Drop Duration" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText
              inset
              primary="change default duration: 15m 30m 1hr 2hr"
            />
          </ListItem>
        </List>
      </Collapse>
    </F>
  );
};

export const View = withStyles(styles)(WrappedComponent);
