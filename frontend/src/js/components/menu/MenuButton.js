//jscs:disable requireShorthandArrowFunctions
import React, { Component, Fragment as F } from 'react';
import { SideList } from './SideList';
import { IconButton, MenuIcon, Drawer } from '../material';
import { withStyles } from '../../containers';

const styles = theme => ({
  button: {
    marginRight: theme.spacing.unit,
  },
});

class WrappedComponent extends Component {
  state = {
    modal: false,
  };
  toggleDrawer = open => {
    this.setState({ modal: open });
  };

  render() {
    const { modal } = this.state;
    const { classes } = this.props;
    return (
      <F>
        <IconButton
          color="inherit"
          aria-label="Menu"
          onClick={() => this.toggleDrawer(!modal)}
          className={classes.button}
        >
          <MenuIcon fontSize="large" />
        </IconButton>
        <Drawer
          anchor="left"
          open={modal}
          onClose={() => this.toggleDrawer(false)}
        >
          <SideList />
        </Drawer>
      </F>
    );
  }
}

export const MenuButton = withStyles(styles)(WrappedComponent);
