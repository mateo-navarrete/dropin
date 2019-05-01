import React, { Fragment as F } from 'react';
import { Button } from '../Button';
import {
  FormControl,
  Input,
  InputLabel,
  Visibility,
  VisibilityOff,
  InputAdornment,
  IconButton
} from '../../material';
import { withStyles } from '../../../containers';

const styles = theme => ({
  main: {},
  paper: {},
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

const WrappedComponent = ({
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
}) => {
  const disabled = !(user_name && password && email);
  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <FormControl margin="normal" required fullWidth>
        <InputLabel htmlFor="user_name">User Name</InputLabel>
        <Input
          onChange={handleChange}
          id="user_name"
          name="user_name"
          value={user_name}
          autoComplete="off"
          autoFocus
        />
      </FormControl>
      <FormControl margin="normal" required fullWidth>
        <InputLabel htmlFor="adornment-password">Password</InputLabel>
        <Input
          name="password"
          id="password"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={handleChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="Toggle password visibility"
                onClick={handleShowPassword}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl margin="normal" required fullWidth>
        <InputLabel htmlFor="user_name">Email</InputLabel>
        <Input
          onChange={handleChange}
          id="email"
          name="email"
          value={email}
          autoComplete="on"
        />
      </FormControl>
      <Button disabled={disabled} handleClick={handleClick} variant="contained" />
    </form>
  );
};

export const Form = withStyles(styles)(WrappedComponent);
