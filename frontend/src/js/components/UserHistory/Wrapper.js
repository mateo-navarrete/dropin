//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import {
  Collapse,
  ExpandLess,
  ExpandMore,
  DropinHistoryIcon,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '../material';
import { withStyles } from '../../containers';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

const WrappedComponent = ({ classes, children, handleClick, open }) => {
  return (
    <List className={classes.root}>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <DropinHistoryIcon />
        </ListItemIcon>
        <ListItemText inset primary="Drop History" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {children}
        </List>
      </Collapse>
    </List>
  );
};

export const Wrapper = withStyles(styles)(WrappedComponent);
