//jscs:disable requireShorthandArrowFunctions
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { checkAuthStatus } from '../../actions';

const mapDispatchToProps = dispatch => {
  return {
    checkAuthStatus: () => dispatch(checkAuthStatus()),
  };
};

export const withGetAuthStatus = WrappedComponent => {
  class HOC extends Component {
    componentDidMount() {
      this.props.checkAuthStatus();
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  return connect(
    null,
    mapDispatchToProps
  )(HOC);
};
