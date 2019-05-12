//jscs:disable requireShorthandArrowFunctions
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createEvent, setMarkerType } from '../../actions';

const mapStateToProps = ({ auth, events, user }) => {
  return {
    coords: user.geolocation.coords,
    geolocationErrMsg: user.geolocation.errMsg,
    geolocationLoading: user.geolocation.loading,
    timestamp: user.geolocation.timestamp,
    eventsErrMsg: user.events.errMsg,
    userEventsList: user.events.eventsList,
    userHistory: user.events.history,
    eventsLoading: user.events.loading,
    markerType: events.markerType,
    name: auth.user,
    createEventErrMsg: user.createEvent.errMsg,
    creatingEvent: user.createEvent.creatingEvent,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createEvent: eventDetails => dispatch(createEvent(eventDetails)),
    setMarkerType: markerType => dispatch(setMarkerType(markerType)),
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
