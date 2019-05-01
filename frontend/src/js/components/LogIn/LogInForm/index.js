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
    // TODO: handle err codes => noredirect etc
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
