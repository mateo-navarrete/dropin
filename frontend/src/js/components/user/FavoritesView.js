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
import ArchiveIcon from '@material-ui/icons/Archive';
import ActivePinIcon from '@material-ui/icons/WhereToVote';
import {
  BlockIcon,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  VisibilityOff,
  SettingsIcon,
  TimerIcon,
  DropinHistoryIcon,
  DropinEventIcon,
  FavoriteIcon,
  HourGlassIcon,
  DropinUserIcon
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
    tags: false,
    users: false,
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleActiveClick = () => {
    this.setState(state => ({ active: !state.active }));
  };

  handleTagsClick = () => {
    this.setState(state => ({ tags: !state.tags }));
  };

  handleUsersClick = () => {
    this.setState(state => ({ users: !state.users }));
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
            <FavoriteIcon />
          </ListItemIcon>
          <ListItemText inset primary="Favorites" />
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
                  <ListItemText
                    inset
                    primary="active favorite drop events list"
                  />
                </ListItem>
              </List>
            </Collapse>
            <ListItem
              button
              className={classes.nested}
              onClick={this.handleTagsClick}
            >
              <ListItemIcon>
                <DropinEventIcon />
              </ListItemIcon>
              <ListItemText inset primary="Drop Tags" />
              {this.state.tags ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.tags} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemText
                    inset
                    primary="user favorite drop tag events list"
                  />
                </ListItem>
              </List>
            </Collapse>
            <ListItem
              button
              className={classes.nested}
              onClick={this.handleUsersClick}
            >
              <ListItemIcon>
                <DropinUserIcon />
              </ListItemIcon>
              <ListItemText inset primary="Drop Circle" />
              {this.state.users ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.users} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemText
                    inset
                    primary="user favorite users drop events list"
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

NestedList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export const FavoritesView = withStyles(styles)(NestedList);
