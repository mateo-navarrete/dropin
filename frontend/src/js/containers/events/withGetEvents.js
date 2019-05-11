//jscs:disable requireShorthandArrowFunctions
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEvents, deleteEvent } from '../../actions';

const mapStateToProps = ({ events, user: { geolocation } }) => {
  return {
    eventsList: events.eventsList,
    coords: geolocation.coords,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getEvents: api => dispatch(getEvents(api)),
    deleteEvent: userEventsList => dispatch(deleteEvent(userEventsList))
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
