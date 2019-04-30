import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  createEvent,
  setCategory,
  setPrivacy,
  setExpiration
} from '../../actions';

const mapStateToProps = ({ authReducer, eventReducer, userCoordsReducer }) => {
  return {
    user_name: authReducer.user_name,
    visible: eventReducer.visible,
    // visible: eventReducer.visible,
    event_id: eventReducer.event_id,
    category_id: eventReducer.category_id,
    user_id: eventReducer.user_id,
    expiration_date: eventReducer.expiration_date,
    display_user: eventReducer.display_user,
    latitude: userCoordsReducer.coords.latitude,
    longitude: userCoordsReducer.coords.longitude,

    // //
    // eventID: eventReducer.eventID,
    // category: eventReducer.category,
    // categories: eventReducer.categories,
    // familyEvents: eventReducer.familyEvents,
    // partyEvents: eventReducer.partyEvents,
    // sportsEvents: eventReducer.sportsEvents,
    // loading: eventReducer.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createEvent: eventObj => dispatch(createEvent(eventObj)),
    // closeStepperModal: () => dispatch(closeStepperModal()),
    setCategory: category_id => dispatch(setCategory(category_id)),
    setPrivacy: display_user => dispatch(setPrivacy(display_user)),
    setExpiration: expiration_date => dispatch(setExpiration(expiration_date))
  };
};

export const withEvent = WrappedComponent => {
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
