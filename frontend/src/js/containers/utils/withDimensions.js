//jscs:disable requireShorthandArrowFunctions
import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = ({ dimensions }) => {
  return {
    height: dimensions.height,
    width: dimensions.width,
    headerHeight: dimensions.headerHeight,
    mainHeight: dimensions.mainHeight,
    footerHeight: dimensions.footerHeight,
  };
};

export const withDimensions = WrappedComponent => {
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
