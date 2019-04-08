import React, { Component } from 'react';
import { connect } from 'react-redux';
import { openPinModal, closePinModal } from '../../actions';

const mapStateToProps = ({ pinModalReducer }) => {
  return {
    visible: pinModalReducer.visible,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openPinModal: () => dispatch(openPinModal()),
    closePinModal: () => dispatch(closePinModal()),
  };
};

const withPinModal = WrappedComponent => {
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

export default withPinModal;
