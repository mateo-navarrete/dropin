import React, { Component } from "react";
import { connect } from "react-redux";
import { getEvents, setLoadedToFalse, getAddress } from "../../actions";

const mapStateToProps = ({ eventsReducer, userCoordsReducer }) => {
  return {
    category: eventsReducer.family,
    eventCoords: eventsReducer.familyEvents,
    loading: eventsReducer.loading,
    loaded: eventsReducer.loaded,
    coords: userCoordsReducer.coords
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getEvents: (e) => dispatch(getEvents(e)),
    setLoadedToFalse: () => dispatch(setLoadedToFalse()),
    getAddress: (latitude, longitude) => dispatch(getAddress(latitude, longitude))
  };
};

export const withFamilyEvents = WrappedComponent => {
  class HOC extends Component {
    componentDidMount() {
      const { category, getEvents, coords } = this.props;
      getEvents(category);
      console.log("With Family Event!!!", coords.latitude)
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
