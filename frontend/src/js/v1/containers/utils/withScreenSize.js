import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = ({ sizeReducer }) => {
  return {
    height: sizeReducer.height,
    marginLeft: sizeReducer.marginLeft,
    size: sizeReducer.size,
    width: sizeReducer.width,
    adjWidth: sizeReducer.adjWidth,
    pinsH: sizeReducer.pinsH,
    dropsH: sizeReducer.dropsH,
    droppersH: sizeReducer.droppersH,
    overlayHeight: sizeReducer.overlayHeight,
    overlayWidth: sizeReducer.overlayWidth,
    mainHeight: sizeReducer.mainHeight,
    mainWidth: sizeReducer.mainWidth,
    navBarHeight: sizeReducer.navBarHeight,
    navBarWidth: sizeReducer.navBarWidth,
    actionBarHeight: sizeReducer.actionBarHeight,
    actionBarWidth: sizeReducer.actionBarWidth,
  };
};

const withScreenSize = WrappedComponent => {
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

export default withScreenSize;
