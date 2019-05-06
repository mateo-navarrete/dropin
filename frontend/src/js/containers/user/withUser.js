//jscs:disable requireShorthandArrowFunctions
import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = ({ auth, user: { geolocation, events } }) => {
  return {
    coords: geolocation.coords,
    geolocationErrMsg: geolocation.errMsg,
    geolocationLoading: geolocation.loading,
    timestamp: geolocation.timestamp,
    events: events.events,
    eventsErrMsg: events.errMsg,
    eventsLoading: events.loading,
    name: auth.user,
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
    null
  )(HOC);
};
