import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEvents } from '../../actions';

const mapStateToProps = ({ eventsReducer }) => {
  return {
    category: eventsReducer.sports,
    eventCoords: eventsReducer.sportsEvents,
    // loading: eventsReducer.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getEvents: e => dispatch(getEvents(e)),
  };
};

export const withSportsEvents = WrappedComponent => {
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
