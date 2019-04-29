//jscs:disable requireShorthandArrowFunctions
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginDemoUser } from '../../actions';

const mapDispatchToProps = dispatch => {
  return {
    loginDemoUser: () => dispatch(loginDemoUser()),
  };
};

export const withDemoUser = WrappedComponent => {
  class HOC extends Component {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  return connect(
    null,
    mapDispatchToProps
  )(HOC);
};
