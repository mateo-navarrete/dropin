//jscs:disable requireShorthandArrowFunctions
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGeolocation } from '../../actions';

const mapStateToProps = ({ geolocation }) => {
  return {
    // loading: geolocation.loading,
    coords: geolocation.coords,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getGeolocation: () => dispatch(getGeolocation()),
  };
};

export const withGetGeolocation = WrappedComponent => {
  class HOC extends Component {
    componentDidMount() {
      const { coords, getGeolocation } = this.props;
      if (!coords.latitude) {
        getGeolocation();
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(HOC);
};
