import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import {
  BlockIcon,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  VisibilityOff,
  SettingsIcon,
  TimerIcon
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
    privacy: false,
    duration: false,
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handlePrivacyClick = () => {
    this.setState(state => ({ privacy: !state.privacy }));
  };

  handleDurationClick = () => {
    this.setState(state => ({ duration: !state.duration }));
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
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText inset primary="Default Settings" />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              className={classes.nested}
              onClick={this.handlePrivacyClick}
            >
              <ListItemIcon>
                <VisibilityOff />
              </ListItemIcon>
              <ListItemText inset primary="Privacy" />
              {this.state.privacy ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.privacy} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemText inset primary="allow users to search for my profile" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem
              button
              className={classes.nested}
              onClick={this.handleDurationClick}
            >
              <ListItemIcon>
                <TimerIcon />
              </ListItemIcon>
              <ListItemText inset primary="Drop Duration" />
              {this.state.duration ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.duration} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemText inset primary="change default duration: 15m 30m 1hr 2hr" />
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

export const UserNestedList = withStyles(styles)(NestedList);
