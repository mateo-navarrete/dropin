//jscs:disable requireShorthandArrowFunctions
import React, { Component, Fragment as F } from 'react';
import {
  Button,
  SignUpIcon,
  LogInIcon
  // Drawer
} from '../material';
import { withStyles } from '../../containers';

const styles = theme => ({
  redButton: {
    margin: theme.spacing.unit,
    color: '#FB364A',
    borderColor: '#FB364A',
    '&:hover': {
      backgroundColor: '#fb5e6e33',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#FB364A',
      color: '#FFF',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
  blueButton: {
    margin: theme.spacing.unit,
    color: '#2980B9',
    borderColor: '#2980B9',
    '&:hover': {
      backgroundColor: '#5399c733',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#2980B9',
      color: '#FFF',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
  // leftIcon: {
  //   marginRight: theme.spacing.unit,
  // },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
});

class Wrapper extends Component {
  state = {
    modal: false,
  };
  toggleDrawer = open => {
    this.setState({ modal: open });
  };

  render() {
    const { classes } = this.props;
    // const { modal } = this.state;
    return (
      <F>
        <Button
          variant="outlined"
          className={classes.redButton}
          style={{ button: 'focus{outline:0;}' }}
          href="./new"
        >
          Sign Up
          <SignUpIcon fontSize="small" className={classes.rightIcon} />
        </Button>
        <Button
          variant="outlined"
          className={classes.blueButton}
          href="./login"
        >
          Log In
          <LogInIcon fontSize="small" className={classes.rightIcon} />
        </Button>
      </F>
    );
  }
}

// <Drawer
//   anchor="right"
//   open={modal}
//   onClose={() => this.toggleDrawer(false)}
// >
//   <SideList />
// </Drawer>

export const DefaultLoggedOutView = withStyles(styles)(Wrapper);
