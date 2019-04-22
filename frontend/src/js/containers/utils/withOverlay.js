import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  hideBottomOverlay,
  hideTopOverlay,
  showBottomOverlay,
  showTopOverlay,
  getAddress
} from '../../actions';

const mapStateToProps = ({ overlayReducer }) => {
  return {
    bottomOverlay: overlayReducer.bottomOverlay,
    topOverlay: overlayReducer.topOverlay,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    hideBottomOverlay: () => dispatch(hideBottomOverlay()),
    hideTopOverlay: () => dispatch(hideTopOverlay()),
    showBottomOverlay: () => dispatch(showBottomOverlay()),
    showTopOverlay: eventID => dispatch(showTopOverlay(eventID)),
    getAddress: (latitude, longitude) => dispatch(getAddress(latitude, longitude))
  };
};

export const withOverlay = WrappedComponent => {
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
