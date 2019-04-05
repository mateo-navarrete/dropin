import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { getPartyPins } from '../actions';

const mapStateToProps = ({ partyReducer }) => {
  return {
    drop: partyReducer.drop,
    coords: partyReducer.coords,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // getPartyPins: userCoords => dispatch(getPartyPins(userCoords)),
  };
};

const withPartyDrops = (WrappedComponent, api) => {
  class HOC extends Component {
    componentDidMount() {
      //getPartyPins based on userCoords here
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

export default withPartyDrops;
