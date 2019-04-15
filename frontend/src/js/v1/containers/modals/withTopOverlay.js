import React, { Component } from 'react';
import { connect } from 'react-redux';
import { openTopOverlay, closeTopOverlay } from '../../actions';

const mapStateToProps = ({
  topOverlayReducer,
  dropsReducer,
  familyReducer,
  partyReducer,
  sportsReducer,
}) => {
  return {
    topOverlayVisible: topOverlayReducer.topOverlayVisible,
    coordsId: topOverlayReducer.coordsId,
    eventId: dropsReducer.eventId,
    drop: dropsReducer.drop,
    family: familyReducer.coords,
    party: partyReducer.coords,
    sports: sportsReducer.coords,
    // category_id: stepperModalReducer.category_id,
    // user_id: stepperModalReducer.user_id,
    // latitude: stepperModalReducer.latitude,
    // longitude: stepperModalReducer.longitude,
    // display_user: stepperModalReducer.display_user,
    // event_name: stepperModalReducer.event_name,
    // description: stepperModalReducer.description,
    // expiration_date: stepperModalReducer.expiration_date,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openTopOverlay: coordsId => dispatch(openTopOverlay(coordsId)),
    closeTopOverlay: () => dispatch(closeTopOverlay()),
  };
};

const withTopOverlay = WrappedComponent => {
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

export default withTopOverlay;
