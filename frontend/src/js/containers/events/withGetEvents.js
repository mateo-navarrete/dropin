//jscs:disable requireShorthandArrowFunctions
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEvents, deleteEvent, setMarkerType } from '../../actions';

const mapStateToProps = ({ events, user: { geolocation } }) => {
  return {
    eventsList: events.eventsList,
    coords: geolocation.coords,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getEvents: api => dispatch(getEvents(api)),
    deleteEvent: userEventsList => dispatch(deleteEvent(userEventsList)),
    setMarkerType: markerType => dispatch(setMarkerType(markerType))
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
