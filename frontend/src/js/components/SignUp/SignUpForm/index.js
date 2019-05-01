import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { View } from './View';
import { withAuth } from '../../../containers';

class WrappedComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: '',
      password: '',
      showPassword: false,
      email: '',
      photo: '',
    };
  }

  handleShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  handleSubmit = event => {
    event.preventDefault();
    let path = '/';
    this.props.history.push(path);
    this.props.createUser(this.state);
    // TODO: handle err codes => noredirect etc
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { user_name, showPassword, password, email, photo } = this.state;
    return (
      <View
        handleSubmit={e => this.handleSubmit(e)}
        handleChange={this.handleChange}
        user_name={user_name}
        showPassword={showPassword}
        password={password}
        email={email}
        photo={photo}
        handleShowPassword={this.handleShowPassword}
        handleClick={e => this.handleSubmit(e)}
      />
    );
  }
}

// TODO: withSignUp
export const SignUpForm = withRouter(withAuth(WrappedComponent));
