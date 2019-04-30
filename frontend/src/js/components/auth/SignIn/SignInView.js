import React, { Fragment as F } from 'react';
// import { DivideOr } from '../../utils';
import { LogInDemoUser } from '../../LoggedOut/LogInDemoUser';
// import { withDemoUser } from '../../../containers';
// import { Btn } from '../../Button';

import {
  Avatar,
  Button as B,
  Divider,
  FormControl,
  Input,
  InputLabel,
  Typography,
  LockOutlinedIcon,
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
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    // marginTop: theme.spacing.unit * 3,
  },
});

class WrappedComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: '',
      password: '',
      showPassword: false,
    };
  }

  handleShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  handleSubmit = event => {
    event.preventDefault();
    const { user_name, password } = this.state;
    // console.log(user_name, password);
    this.props.loginUser({ user_name, password });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    // console.log(this.props);
    // console.log('@@@', this.props);
    return (
      <F>
        {this.props.height > 600 && (
          <F>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign In
            </Typography>
          </F>
        )}
        <form className={classes.form} onSubmit={this.handleSubmit}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="user_name">User Name</InputLabel>
            <Input
              onChange={this.handleChange}
              id="user_name"
              name="user_name"
              value={this.state.user_name}
              autoComplete="off"
              autoFocus
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="adornment-password">Password</InputLabel>
            <Input
              name="password"
              id="password"
              type={this.state.showPassword ? 'text' : 'password'}
              value={this.state.password}
              onChange={this.handleChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Toggle password visibility"
                    onClick={this.handleShowPassword}
                  >
                    {this.state.showPassword ? (
                      <Visibility />
                    ) : (
                      <VisibilityOff />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <B
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </B>
        </form>
        <br />
        <Divider />
        <B color="secondary" onClick={this.props.showSignup}>
          or create an account
        </B>
        <LogInDemoUser buttonType="text" label="Or Log In As Demo User" />
      </F>
    );
  }
}
// <HOCdemo />

// const HOCdemo = props => {
//   console.log(props);
//   return (
//     <LogInDemoUser
//       buttonStyle="demoButton"
//       label="HOC rule"
//       isRightIcon="rightIcon"
//       handleClick={props.loginDemoUser}
//     />
//   );
// };
//
// const LogInDemoUser = props => {
//   console.log(props);
//   const Wrapped = props => <Btn {...props} />;
//   const HOC = withDemoUser(Wrapped);
//   // console.log(props, Wrapped, HOC);
//   return <HOC {...props} />;
// };

export const SignInView = withStyles(styles)(WrappedComponent);
