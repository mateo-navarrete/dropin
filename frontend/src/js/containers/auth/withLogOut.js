//jscs:disable requireShorthandArrowFunctions
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions';

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch(logoutUser()),
  };
};

export const withLogOut = WrappedComponent => {
  class HOC extends Component {
    handleClick = () => {
      let path = '/';
      this.props.history.push(path);
      this.props.logoutUser();
    };

    render() {
      return (
        <WrappedComponent handleClick={this.handleClick} {...this.props} />
      );
    }
  }
  return connect(
    null,
    mapDispatchToProps
  )(withRouter(HOC));
};
