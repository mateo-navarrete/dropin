import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { getEducationPins } from '../actions';

const mapStateToProps = ({ educationReducer }) => {
  return {
    drop: educationReducer.drop,
    coords: educationReducer.coords,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // getEducationPins: userCoords => dispatch(getEducationPins(userCoords)),
  };
};

const withEducationDrops = (WrappedComponent, api) => {
  class HOC extends Component {
    componentDidMount() {
      //getEducationPins based on userCoords here
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

export default withEducationDrops;
