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
import FomoIcon from '@material-ui/icons/AccessAlarm';
import NewPinIcon from '@material-ui/icons/Assistant';
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
  DropinUserIcon,
  HotIcon
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
            <ActivePinIcon />
          </ListItemIcon>
          <ListItemText inset primary="Active" />
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
                <HotIcon />
              </ListItemIcon>
              <ListItemText inset primary="Trending" />
            </ListItem>
            <ListItem
              button
              className={classes.nested}
              onClick={this.handleActiveClick}
            >
              <ListItemIcon>
                <NewPinIcon />
              </ListItemIcon>
              <ListItemText inset primary="Just Dropped" />
            </ListItem>
            <ListItem
              button
              className={classes.nested}
              onClick={this.handleActiveClick}
            >
              <ListItemIcon>
                <FomoIcon />
              </ListItemIcon>
              <ListItemText inset primary="Fomo" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    );
  }
}

NestedList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export const DropsFilterView = withStyles(styles)(NestedList);
