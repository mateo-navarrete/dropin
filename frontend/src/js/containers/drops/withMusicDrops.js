import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { getAuthUser } from '../actions';

const mapStateToProps = ({ musicReducer }) => {
  return {
    drop: musicReducer.drop,
    coords: musicReducer.coords,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // getAuthUser: api => dispatch(getAuthUser(api)),
  };
};

const withMusicDrops = (WrappedComponent, api) => {
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

export default withMusicDrops;
