//jscs:disable requireShorthandArrowFunctions
import React, { Fragment as F } from 'react';
import SignUpIcon from '@material-ui/icons/VerifiedUser';
import { Form } from './Form';
import { withStyles, withDimensions } from '../../../containers';
import { Avatar, Typography } from '../../material';

const styles = theme => ({
  avatar: {
    margin: `0 0 ${theme.spacing.unit * 2}px`,
    backgroundColor: '#FB364A',
  },
});

const WrappedComponent = ({
  classes,
  handleChange,
  handleSubmit,
  height,
  isUnder18,
  ...props,
}) => {
  const renderHeader =
    height > 600 ? (
      <div className="flex col align">
        <Avatar className={classes.avatar}>
          <SignUpIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          You must be at least 18 years old to create a dropin Account.
        </Typography>
      </div>
    ) : null;
  return (
    <F>
      {renderHeader}
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        isUnder18={isUnder18}
      />
    </F>
  );
};

export const View = withStyles(styles)(withDimensions(WrappedComponent));
