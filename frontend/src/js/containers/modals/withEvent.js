import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createEvent } from '../../actions';

const mapStateToProps = ({ userCoordsReducer, eventReducer }) => {
  return {
    visible: eventReducer.visible,
    event_id: eventReducer.event_id,
    category_id: eventReducer.category_id,
    user_id: eventReducer.user_id,
    // latitude: userCoordsReducer.latitude,
    // longitude: userCoordsReducer.longitude,
    latitude: eventReducer.latitude,
    longitude: eventReducer.longitude,
    display_user: eventReducer.display_user,
    event_name: eventReducer.event_name,
    description: eventReducer.description,
    expiration_date: eventReducer.expiration_date,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createEvent: eventObj => dispatch(createEvent(eventObj)),
    // closeStepperModal: () => dispatch(closeStepperModal()),
  };
};

const withEvent = WrappedComponent => {
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

export default withEvent;
