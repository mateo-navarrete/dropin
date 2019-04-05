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
    // getMusicPins: userCoords => dispatch(getMusicPins(userCoords)),
  };
};

const withMusicDrops = (WrappedComponent, api) => {
  class HOC extends Component {
    componentDidMount() {
      //getMusicPins based on userCoords here
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

export default withMusicDrops;
