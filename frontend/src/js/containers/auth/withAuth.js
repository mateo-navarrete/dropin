//jscs:disable requireShorthandArrowFunctions
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  checkAuthStatus,
  createUser,
  loginUser,
  logoutUser
} from '../../actions';

const mapStateToProps = ({ auth }) => {
  return {
    user: auth.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    checkAuthStatus: () => dispatch(checkAuthStatus()),
    createUser: userObj => dispatch(createUser(userObj)),
    loginUser: loginObj => dispatch(loginUser(loginObj)),
    logoutUser: () => dispatch(logoutUser()),
  };
};

export const withAuth = WrappedComponent => {
  class HOC extends Component {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(HOC);
};
