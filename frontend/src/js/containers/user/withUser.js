//jscs:disable requireShorthandArrowFunctions
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createEvent } from '../../actions';

const mapStateToProps = ({
  auth,
  user: { geolocation, events, createEvent },
}) => {
  return {
    coords: geolocation.coords,
    geolocationErrMsg: geolocation.errMsg,
    geolocationLoading: geolocation.loading,
    timestamp: geolocation.timestamp,
    eventsErrMsg: events.errMsg,
    userEventsList: events.eventsList,
    userHistory: events.history,
    eventsLoading: events.loading,
    name: auth.user,
    createEventErrMsg: createEvent.errMsg,
    creatingEvent: createEvent.creatingEvent,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createEvent: (eventDetails) => dispatch(createEvent(eventDetails)),
  };
};

//TODO: user: { profile } => email, photo, etc
// TODO: editEmail, updatePhoto, changePW

export const withUser = WrappedComponent => {
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
