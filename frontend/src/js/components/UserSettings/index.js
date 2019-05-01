//jscs:disable requireShorthandArrowFunctions
import React from 'react';
// import { View } from './View';
// import { withUser } from '../../containers';
import {
  Collapse,
  ExpandLess,
  ExpandMore,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  VisibilityOff,
  SettingsIcon,
  TimerIcon
} from '../material';
import { withStyles } from '../../containers';
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
                  <ListItemText
                    inset
                    primary="allow users to search for my profile"
                  />
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
                  <ListItemText
                    inset
                    primary="change default duration: 15m 30m 1hr 2hr"
                  />
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Collapse>
      </List>
    );
  }
}

export const UserSettings = withStyles(styles)(NestedList);
// export const UserSettings = withUser(WrappedComponent);
