//jscs:disable requireShorthandArrowFunctions
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAddress } from '../../actions';

const mapStateToProps = ({ events }) => {
  return {
    eventsList: events.eventsList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAddress: eventCoords => dispatch(getAddress(eventCoords)),
  };
};

export const withEvents = WrappedComponent => {
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
