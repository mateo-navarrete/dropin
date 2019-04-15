import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = ({ eventsReducer }) => {
  return {
    category: eventsReducer.category,
    categories: eventsReducer.categories,
    // loading: eventsReducer.loading,
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
