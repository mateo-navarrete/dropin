import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { getGamingPins } from '../actions';

const mapStateToProps = ({ gamingReducer }) => {
  return {
    drop: gamingReducer.drop,
    coords: gamingReducer.coords,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // getGamingPins: userCoords => dispatch(getGamingPins(userCoords)),
  };
};

const withGamingDrops = (WrappedComponent, api) => {
  class HOC extends Component {
    componentDidMount() {
      //getGamingPins based on userCoords here
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

export default withGamingDrops;
