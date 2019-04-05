import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { getAuthUser } from '../actions';

const mapStateToProps = ({ foodReducer }) => {
  return {
    drop: foodReducer.drop,
    coords: foodReducer.coords,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // getFoodPins: userCoords => dispatch(getFoodPins(userCoords)),
  };
};

const withFoodDrops = (WrappedComponent, api) => {
  class HOC extends Component {
    componentDidMount() {
      //getFoodPins based on userCoords here
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

export default withFoodDrops;
