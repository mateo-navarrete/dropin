import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEvents } from '../../actions';

const mapStateToProps = ({ eventsReducer }) => {
  return {
    category: eventsReducer.party,
    eventCoords: eventsReducer.partyEvents,
    loading: eventsReducer.loading,
    loaded: eventsReducer.loaded
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getEvents: e => dispatch(getEvents(e)),
  };
};

export const withPartyEvents = WrappedComponent => {
  class HOC extends Component {
    componentDidMount() {
      const { category, getEvents } = this.props;
      getEvents(category);
      //TODO: { api, category_id, latitude, longitude}
      // based on userCoords here
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
