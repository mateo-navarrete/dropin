import React, { Fragment as F } from 'react';
import { Form } from './Form';
import { DropDown } from '../DropDown';
import {
  Avatar,
  Typography,
  LockOutlinedIcon
} from '../../material';
import { withStyles, withDimensions } from '../../../containers';

const styles = theme => ({
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: '#2980B9',
  },
});

const WrappedComponent = ({
  height,
  classes,
  handleSubmit,
  handleChange,
  user_name,
  showPassword,
  password,
  handleShowPassword,
  handleClick,
}) => {
  const renderHeader =
    height > 600 ? (
      <div className="flex col align">
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
      </div>
    ) : null;
  return (
    <F>
      {renderHeader}
      <Form
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        user_name={user_name}
        showPassword={showPassword}
        password={password}
        handleShowPassword={handleShowPassword}
        handleClick={handleClick}
      />
      <DropDown />
    </F>
  );
};

export const View = withStyles(styles)(withDimensions(WrappedComponent));
