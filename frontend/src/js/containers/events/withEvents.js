//jscs:disable requireShorthandArrowFunctions
import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = ({ events }) => {
  return {
    eventsList: events.eventsList,
  };
};

export const withEvents = WrappedComponent => {
  class HOC extends Component {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  return connect(
    mapStateToProps,
    null
  )(HOC);
};
