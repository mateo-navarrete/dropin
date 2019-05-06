//jscs:disable requireShorthandArrowFunctions
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginDemoUser } from '../../actions';

const mapDispatchToProps = dispatch => {
  return {
    loginDemoUser: () => dispatch(loginDemoUser()),
  };
};

export const withDemoUser = WrappedComponent => {
  class HOC extends Component {
    handleClick = () => {
      let path = '/';
      this.props.history.push(path);
      this.props.loginDemoUser();
    };

    render() {
      return <WrappedComponent handleClick={this.handleClick}{...this.props} />;
    }
  }
  return connect(
    null,
    mapDispatchToProps
  )(withRouter(HOC));
};
