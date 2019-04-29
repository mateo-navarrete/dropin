//jscs:disable requireShorthandArrowFunctions
import React, { Component, Fragment as F } from 'react';
import { withRouter } from 'react-router-dom';
import { LogInView } from '../views';
import { Button, LogInIcon } from '../../material';
import { ModalView } from '../../utils';
import { withStyles } from '../../../containers';

const styles = theme => ({
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
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

class Wrapper extends Component {
  state = {
    modal: false,
  };
  toggleDrawer = open => {
    let path = open ? `login` : '/';
    this.props.history.push(path);
    this.setState({ modal: open });
  };

  render() {
    const { modal } = this.state;
    const { classes, ...rest } = this.props;
    // console.log(this.props);
    return (
      <F>
        <Button
          variant="outlined"
          className={classes.blueButton}
          onClick={() => this.toggleDrawer(true)}
        >
          Log In
          <LogInIcon fontSize="small" className={classes.rightIcon} />
        </Button>
        <ModalView modal={modal} handleClick={() => this.toggleDrawer(false)}>
          <LogInView {...rest} />
        </ModalView>
      </F>
    );
  }
}

// href="./login"

export const OutlinedLogInButton = withStyles(styles)(withRouter(Wrapper));
