import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = ({ userCoordsReducer }) => {
  return {
    // loading: userCoordsReducer.loading,
    userCoords: userCoordsReducer.coords,
  };
};

export const withUserCoords = WrappedComponent => {
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
