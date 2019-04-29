//jscs:disable requireShorthandArrowFunctions
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  checkAuthStatus,
  loginUser,
  loginDemoUser,
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
    loginUser: loginObj => dispatch(loginUser(loginObj)),
    loginDemoUser: () => dispatch(loginDemoUser()),
    logoutUser: () => dispatch(logoutUser()),
  };
};

export const withAuth = WrappedComponent => {
  class HOC extends Component {
    componentDidMount() {
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
