import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { View } from './View';
import { withLogIn } from '../../../containers';

class WrappedComponent extends Component {
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
    const { user_name, showPassword, password } = this.state;
    return (
      <View
        handleSubmit={e => this.handleSubmit(e)}
        handleChange={this.handleChange}
        user_name={user_name}
        showPassword={showPassword}
        password={password}
        handleShowPassword={this.handleShowPassword}
        handleClick={e => this.handleSubmit(e)}
      />
    );
  }
}

export const LogInForm = withRouter(withLogIn(WrappedComponent));

// render() {
//   const { classes } = this.props;
//   // console.log(this.props);
//   // console.log('@@@', this.props);
//   return (
//     <F>
//       {this.props.height > 600 && (
//         <F>
//           <Avatar className={classes.avatar}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign In
//           </Typography>
//         </F>
//       )}
//       <form className={classes.form} onSubmit={e => this.handleSubmit(e)}>
//         <FormControl margin="normal" required fullWidth>
//           <InputLabel htmlFor="user_name">User Name</InputLabel>
//           <Input
//             onChange={this.handleChange}
//             id="user_name"
//             name="user_name"
//             value={this.state.user_name}
//             autoComplete="off"
//             autoFocus
//           />
//         </FormControl>
//         <FormControl margin="normal" required fullWidth>
//           <InputLabel htmlFor="adornment-password">Password</InputLabel>
//           <Input
//             name="password"
//             id="password"
//             type={this.state.showPassword ? 'text' : 'password'}
//             value={this.state.password}
//             onChange={this.handleChange}
//             endAdornment={
//               <InputAdornment position="end">
//                 <IconButton
//                   aria-label="Toggle password visibility"
//                   onClick={this.handleShowPassword}
//                 >
//                   {this.state.showPassword ? (
//                     <Visibility />
//                   ) : (
//                     <VisibilityOff />
//                   )}
//                 </IconButton>
//               </InputAdornment>
//             }
//           />
//         </FormControl>
//         <FormControlLabel
//           control={<Checkbox value="remember" color="primary" />}
//           label="Remember me"
//         />
//
//         <Button handleClick={e => this.handleSubmit(e)} variant="contained" />
//       </form>
//       <DropDown />
//     </F>
//   );
// }
