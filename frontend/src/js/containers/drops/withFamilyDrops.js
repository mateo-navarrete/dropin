import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { getFamilyPins } from '../actions';

const mapStateToProps = ({ familyReducer }) => {
  return {
    drop: familyReducer.drop,
    coords: familyReducer.coords,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // getFamilyPins: userCoords => dispatch(getFamilyPins(userCoords)),
  };
};

const withFamilyDrops = (WrappedComponent, api) => {
  class HOC extends Component {
    componentDidMount() {
      //getFamilyPins based on userCoords here
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

export default withFamilyDrops;
