//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { Button } from '../Button';
import {
  FormControl,
  Input,
  InputLabel,
  Visibility,
  VisibilityOff,
  InputAdornment,
  IconButton,
  FormControlLabel,
  Checkbox
} from '../../material';
import { withStyles } from '../../../containers';

const styles = theme => ({
  main: {},
  paper: {},
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
    //TODO edit text color
  },
  submit: {
    // marginTop: theme.spacing.unit * 3,
  },
});

const WrappedComponent = ({
  classes,
  handleSubmit,
  handleChange,
  user_name,
  showPassword,
  password,
  handleShowPassword,
  handleClick,
}) => {
  return (
    <form className={classes.form} onSubmit={e => this.handleSubmit(e)}>
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
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />

      <Button handleClick={handleClick} variant="contained" />
    </form>
  );
};

// <Button handleClick={this.props.showSignup} />

// <br />
// <Divider />
// <LogInDemoUser buttonType="text" label="Or Log In As Demo User" />
// <B
//   type="submit"
//   fullWidth
//   variant="contained"
//   color="primary"
//   className={classes.submit}
// >
//   Sign In
// </B>
// <B color="secondary" onClick={this.props.showSignup}>
// or create an account
// </B>

export const Form = withStyles(styles)(WrappedComponent);
