import React, { Component } from 'react';
import { connect } from 'react-redux';
import { openStepperModal, closeStepperModal } from '../../actions';

const mapStateToProps = ({ stepperModalReducer }) => {
  return {
    visible: stepperModalReducer.visible,
    event_id: stepperModalReducer.event_id,
    category_id: stepperModalReducer.category_id,
    user_id: stepperModalReducer.user_id,
    latitude: stepperModalReducer.latitude,
    longitude: stepperModalReducer.longitude,
    display_user: stepperModalReducer.display_user,
    event_name: stepperModalReducer.event_name,
    description: stepperModalReducer.description,
    expiration_date: stepperModalReducer.expiration_date,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openStepperModal: value => dispatch(openStepperModal(value)),
    closeStepperModal: () => dispatch(closeStepperModal()),
  };
};

const withStepperModal = WrappedComponent => {
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

export default withStepperModal;
