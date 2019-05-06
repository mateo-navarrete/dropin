//jscs:disable requireShorthandArrowFunctions
import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = ({ auth }) => {
  return {
    user: auth.user,
  };
};

export const withAuthUser = WrappedComponent => {
  class HOC extends Component {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  return connect(
    mapStateToProps,
    null
  )(HOC);
};
