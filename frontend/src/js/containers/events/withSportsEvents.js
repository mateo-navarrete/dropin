import React, { Component } from "react";
import { connect } from "react-redux";
import { getEvents, setLoadedToFalse } from "../../actions";

const mapStateToProps = ({ eventsReducer }) => {
  return {
    category: eventsReducer.sports,
    eventCoords: eventsReducer.sportsEvents,
    loading: eventsReducer.loading,
    loaded: eventsReducer.loaded
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getEvents: e => dispatch(getEvents(e)),
    setLoadedToFalse: () => dispatch(setLoadedToFalse())
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

    componentWillUnmount() {
      const { setLoadedToFalse } = this.props;
      setLoadedToFalse();
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
