import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  createUser,
  checkAuthStatus,
  loginUser,
  logoutUser,
  hideSignin,
  hideSignup,
  showSignin,
  showSignup
} from '../../actions';

const mapStateToProps = ({ authReducer }) => {
  return {
    auid: authReducer.auid,
    authname: authReducer.authname,
    waiting: authReducer.waiting,
    showSignupForm: authReducer.showSignupForm,
    user_name: authReducer.user_name,
    password: authReducer.password,
    birth_date: authReducer.birth_date, //format ?
    userObj: authReducer.userObj,
    loginObj: authReducer.loginObj,
    authStatus: authReducer.authStatus,
    isLoggedIn: authReducer.isLoggedIn,
    signin: authReducer.signin,
    signup: authReducer.signup,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createUser: userObj => dispatch(createUser(userObj)),
    checkAuthStatus: () => dispatch(checkAuthStatus()),
    loginUser: loginObj => dispatch(loginUser(loginObj)),
    logoutUser: () => dispatch(logoutUser()),
    hideSignin: () => dispatch(hideSignin()),
    hideSignup: () => dispatch(hideSignup()),
    showSignin: () => dispatch(showSignin()),
    showSignup: () => dispatch(showSignup()),
  };
};

// const withAuthUser = (WrappedComponent, api) => {
export const withAuthUser = WrappedComponent => {
  class HOC extends Component {
    componentDidMount() {
      // if (api) this.props.createUser(api);
      this.props.checkAuthStatus();
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(HOC);
};
