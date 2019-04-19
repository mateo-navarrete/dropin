import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = ({ eventsReducer }) => {
  return {
    eventID: eventsReducer.eventID,
    category: eventsReducer.category,
    categories: eventsReducer.categories,
    familyEvents: eventsReducer.familyEvents,
    partyEvents: eventsReducer.partyEvents,
    sportsEvents: eventsReducer.sportsEvents,
    loading: eventsReducer.loading,
    loaded: eventsReducer.loaded
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
    null
  )(HOC);
};
