//jscs:disable requireShorthandArrowFunctions
import React, { Fragment as F } from 'react';
import { withStyles } from '../../../containers';
import { Button as B } from '../../material';

const styles = theme => ({
  submit: {
    marginTop: theme.spacing.unit * 3,
    backgroundColor: '#FB364A',
    '&:hover': {
      backgroundColor: '#af2533',
    },
    '&:active': {
      backgroundColor: '#fb5e6e',
    },
  },
});

const WrappedComponent = ({ classes, isUnder18, ...props }) => {
  return (
    <F>
      <B
        disabled={isUnder18}
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Create my dropin account
      </B>
    </F>
  );
};

export const Button = withStyles(styles)(WrappedComponent);
