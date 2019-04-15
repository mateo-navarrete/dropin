import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = ({ areaSizeReducer }) => {
  return {
    height: areaSizeReducer.height,
    // width: areaSizeReducer.width,
    mainHeight: areaSizeReducer.mainHeight,
    navBarHeight: areaSizeReducer.navBarHeight,
    actionBarHeight: areaSizeReducer.actionBarHeight,
  };
};

export const withAreaSizes = WrappedComponent => {
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
