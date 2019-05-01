//jscs:disable requireShorthandArrowFunctions
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../../actions';

const mapDispatchToProps = dispatch => {
  return {
    loginUser: (userObj) => dispatch(loginUser(userObj)),
  };
};

export const withLogIn = WrappedComponent => {
  class HOC extends Component {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  return connect(
    null,
    mapDispatchToProps
  )(withRouter(HOC));
};
