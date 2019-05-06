import React, { Fragment as F } from 'react';
import SignUpIcon from '@material-ui/icons/VerifiedUser';
import { Form } from './Form';
import { DropDownMenu } from '../../LoggedOut/DropDownMenu';
import { Avatar, Typography } from '../../material';
import { withStyles, withDimensions } from '../../../containers';

const styles = theme => ({
  avatar: {
    margin: `0 0 ${theme.spacing.unit * 2}px`,
    backgroundColor: '#FB364A',
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
  email,
  photo,
  handleShowPassword,
  handleClick,
  handleClose,
}) => {
  // TODO signUp icon instead?
  const renderHeader =
    height > 600 ? (
      <div className="flex col align">
        <Avatar className={classes.avatar}>
          <SignUpIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
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
        email={email}
        photo={photo}
        handleShowPassword={handleShowPassword}
        handleClick={handleClick}
      />
      <DropDownMenu handleClose={handleClose} showLogIn/>
    </F>
  );
};

export const View = withStyles(styles)(withDimensions(WrappedComponent));
