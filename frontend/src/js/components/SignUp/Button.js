//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import SignUpIcon from '@material-ui/icons/VerifiedUser';
import { Button as B } from '../material';
import { withStyles } from '../../containers';

const styles = theme => ({
  containedButton: {
    margin: theme.spacing.unit,
    color: '#FFF',
    backgroundColor: '#FB364A',
    width: '90%',
    '&:hover': {
      backgroundColor: '#af2533',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#FB364A',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
  outlinedButton: {
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
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

// TODO change from isButtonOutlined to variant
const WrappedComponent = ({ classes, isButtonOutlined, handleClick }) => {
  const variant = isButtonOutlined ? 'outlined' : 'contained';
  return (
    <B
      variant={variant}
      fullWidth={variant === 'contained'}
      className={classes[variant + 'Button']}
      onClick={handleClick}
    >
      Sign Up
      <SignUpIcon fontSize="small" className={classes.rightIcon} />
    </B>
  );
};

export const Button = withStyles(styles)(WrappedComponent);
