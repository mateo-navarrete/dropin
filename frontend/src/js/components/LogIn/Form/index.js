import React, { Fragment as F } from 'react';
import { withRouter } from 'react-router-dom';
import { LogInDemoUser } from '../../auth';
import { Button } from '../Button';
import { DropDown } from '../DropDown';
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
import { withStyles, withLogIn } from '../../../containers';

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
    let path = '/';
    this.props.history.push(path);
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
        <form className={classes.form} onSubmit={e => this.handleSubmit(e)}>
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

          <Button handleClick={e => this.handleSubmit(e)} variant="contained" />
        </form>
        <DropDown />
      </F>
    );
  }
}
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

export const Form = withStyles(styles)(withRouter(withLogIn(WrappedComponent)));