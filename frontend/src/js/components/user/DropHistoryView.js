import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import ListSubheader from '@material-ui/core/ListSubheader';
import Collapse from '@material-ui/core/Collapse';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import DraftsIcon from '@material-ui/icons/Drafts';
// import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
// import StarBorder from '@material-ui/icons/StarBorder';
import ArchiveIcon from '@material-ui/icons/Archive';
import ActivePinIcon from '@material-ui/icons/WhereToVote';

import {
  // BlockIcon,
  // Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  // VisibilityOff,
  // SettingsIcon,
  // TimerIcon,
  // HourGlassIcon,
  DropinHistoryIcon,
  // DropinEventIcon
} from '../material';
const styles = theme => ({
  root: {
    width: '100%',
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class NestedList extends React.Component {
  state = {
    open: false,
    active: false,
    archive: false,
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleActiveClick = () => {
    this.setState(state => ({ active: !state.active }));
  };

  handleArchiveClick = () => {
    this.setState(state => ({ archive: !state.archive }));
  };

  render() {
    const { classes } = this.props;
    // component = "nav";
    // subheader={
    //   <ListSubheader component="div">Nested List Items</ListSubheader>
    // }

    return (
      <List className={classes.root}>
        <ListItem button onClick={this.handleClick}>
          <ListItemIcon>
            <DropinHistoryIcon />
          </ListItemIcon>
          <ListItemText inset primary="Drop History" />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              className={classes.nested}
              onClick={this.handleActiveClick}
            >
              <ListItemIcon>
                <ActivePinIcon />
              </ListItemIcon>
              <ListItemText inset primary="Active" />
              {this.state.active ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.active} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemText inset primary="user active drop list" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem
              button
              className={classes.nested}
              onClick={this.handleArchiveClick}
            >
              <ListItemIcon>
                <ArchiveIcon />
              </ListItemIcon>
              <ListItemText inset primary="Archived" />
              {this.state.archive ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.archive} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemText inset primary="user archived drop events" />
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Collapse>
      </List>
    );
  }
}

NestedList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export const DropHistoryView = withStyles(styles)(NestedList);
