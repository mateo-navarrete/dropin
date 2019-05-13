import React from 'react';
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
  cssLabel: {
    color: 'rgba(41, 128, 185, 1)',
    '&$cssFocused': {
      color: 'rgba(41, 128, 185, 1)',
    },
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
      borderBottomColor: 'rgba(41, 128, 185, 1)',
    },
  },
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
        <InputLabel htmlFor="user_name" className={classes.cssLabel}>
          User Name
        </InputLabel>
        <Input
          onChange={handleChange}
          id="user_name"
          name="user_name"
          value={user_name}
          autoComplete="off"
          autoFocus
          className={classes.cssUnderline}
        />
      </FormControl>
      <FormControl margin="normal" required fullWidth>
        <InputLabel htmlFor="adornment-password" className={classes.cssLabel}>
          Password
        </InputLabel>
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
          className={classes.cssUnderline}
        />
      </FormControl>
      <FormControl margin="normal" required fullWidth>
        <InputLabel htmlFor="user_name" className={classes.cssLabel}>
          Email
        </InputLabel>
        <Input
          onChange={handleChange}
          id="email"
          name="email"
          value={email}
          autoComplete="on"
          className={classes.cssUnderline}
        />
      </FormControl>
      <Button
        disabled={disabled}
        handleClick={handleClick}
        variant="contained"
      />
    </form>
  );
};

export const Form = withStyles(styles)(WrappedComponent);
