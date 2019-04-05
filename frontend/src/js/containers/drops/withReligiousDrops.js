import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { getReligiousPins } from '../actions';

const mapStateToProps = ({ religiousReducer }) => {
  return {
    drop: religiousReducer.drop,
    coords: religiousReducer.coords,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // getReligiousPins: userCoords => dispatch(getReligiousPins(userCoords)),
  };
};

const withReligiousDrops = (WrappedComponent, api) => {
  class HOC extends Component {
    componentDidMount() {
      //getReligiousPins based on userCoords here
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

export default withReligiousDrops;
