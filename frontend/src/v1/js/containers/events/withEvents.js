import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getAddress
} from '../../actions'

const mapStateToProps = ({ eventsReducer }) => {
  return {
    eventID: eventsReducer.eventID,
    category: eventsReducer.category,
    categories: eventsReducer.categories,
    familyEvents: eventsReducer.familyEvents,
    partyEvents: eventsReducer.partyEvents,
    sportsEvents: eventsReducer.sportsEvents,
    loading: eventsReducer.loading,
    loaded: eventsReducer.loaded,
    address: eventsReducer.address
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAddress: (latitude, longitude) => dispatch(getAddress(latitude, longitude))
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
