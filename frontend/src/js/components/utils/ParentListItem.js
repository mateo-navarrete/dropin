//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import {
  Collapse,
  ExpandLess,
  ExpandMore,
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

const WrappedComponent = ({
  classes,
  children,
  primaryText,
  toggleShowChildren,
  showChildren,
  showIcon,
}) => {
  return (
    <List className={classes.root}>
      <ListItem button onClick={toggleShowChildren}>
        <ListItemIcon>{showIcon}</ListItemIcon>
        <ListItemText inset primary={primaryText} />
        {showChildren ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={showChildren} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {children}
        </List>
      </Collapse>
    </List>
  );
};

export const ParentListItem = withStyles(styles)(WrappedComponent);
