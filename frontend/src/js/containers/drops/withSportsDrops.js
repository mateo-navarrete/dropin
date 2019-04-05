import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { getSportsPins } from '../actions';

const mapStateToProps = ({ sportsReducer }) => {
  return {
    drop: sportsReducer.drop,
    coords: sportsReducer.coords,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // getSportsPins: userCoords => dispatch(getSportsPins(userCoords)),
  };
};

const withSportsDrops = (WrappedComponent, api) => {
  class HOC extends Component {
    componentDidMount() {
      //getSportsPins based on userCoords here
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

export default withSportsDrops;
