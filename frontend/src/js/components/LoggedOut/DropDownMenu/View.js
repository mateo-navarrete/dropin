import React, { Fragment as F } from 'react';
import { withDemoUser, withStyles } from '../../../containers';
import LogInIcon from '@material-ui/icons/Lock';
import SignUpIcon from '@material-ui/icons/VerifiedUser';
import {
  Collapse,
  ExpandLess,
  ExpandMore,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  MoreVertIcon
} from '../../material';
const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class NestedList extends React.Component {
  state = {
    open: false,
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    const {
      classes,
      handleClose,
      // showModal,
      handleClick,
      showLogIn,
    } = this.props;
    // TODO: refactor this to own components?
    // then have it closeModal & open new modal
    const renderView = showLogIn ? (
      <F>
        <ListItemIcon>
          <LogInIcon style={{ color: '#2980B9' }} />
        </ListItemIcon>
        <ListItemText inset primary="Log In" />
      </F>
    ) : (
      <F>
        <ListItemIcon>
          <SignUpIcon style={{ color: '#FB364A' }} />
        </ListItemIcon>
        <ListItemText inset primary="Sign Up" />
      </F>
    );
    return (
      <List className={classes.root}>
        <ListItem button onClick={this.handleClick}>
          <ListItemIcon>
            <MoreVertIcon />
          </ListItemIcon>
          <ListItemText inset primary="OR..." />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested} onClick={handleClose}>
              {renderView}
            </ListItem>
            <ListItem button className={classes.nested} onClick={handleClick}>
              <ListItemIcon>
                <LogInIcon />
              </ListItemIcon>
              <ListItemText inset primary="Sign In As Demo User" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    );
  }
}

export const View = withStyles(styles)(withDemoUser(NestedList));
