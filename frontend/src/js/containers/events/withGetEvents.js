//jscs:disable requireShorthandArrowFunctions
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEvents } from '../../actions';

const mapStateToProps = ({ events, user: { geolocation } }) => {
  return {
    eventsList: events.eventsList,
    coords: geolocation.coords,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getEvents: api => dispatch(getEvents(api)),
  };
};

export const withGetEvents = WrappedComponent => {
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
