//jscs:disable requireShorthandArrowFunctions
import React, { Component, Fragment as F } from 'react';
import { Link } from 'react-router-dom';
import { LogInView } from '../views';
import { Button, LogInIcon } from '../../material';
import { ModalView } from '../../utils';
import { withStyles } from '../../../containers';

const styles = theme => ({
  blueButton: {
    margin: theme.spacing.unit,
    color: '#FFF',
    backgroundColor: '#2980B9',
    width: '90%',
    '&:hover': {
      backgroundColor: '#1c5981',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#2980B9',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

const LoginUrl = props => <Link to="/login" {...props} />;

class Wrapper extends Component {
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
        <Button
          variant="contained"
          fullWidth
          className={classes.blueButton}
          component={LoginUrl}
          onClick={() => this.toggleDrawer(!modal)}
        >
          Log In
          <LogInIcon fontSize="small" className={classes.rightIcon} />
        </Button>
        <ModalView modal={modal} handleClick={() => this.toggleDrawer(!modal)}>
          <LogInView {...this.props} />
        </ModalView>
      </F>
    );
  }
}

export const DefaultLogInButton = withStyles(styles)(Wrapper);
