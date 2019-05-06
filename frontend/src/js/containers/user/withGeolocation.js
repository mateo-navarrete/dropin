//jscs:disable requireShorthandArrowFunctions
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGeolocation } from '../../actions';

const mapStateToProps = ({ user: { geolocation } }) => {
  return {
    coords: geolocation.coords,
    errMsg: geolocation.errMsg,
    loading: geolocation.loading,
    timestamp: geolocation.timestamp,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getGeolocation: () => dispatch(getGeolocation()),
  };
};

export const withGeolocation = WrappedComponent => {
  class HOC extends Component {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(HOC);
};
