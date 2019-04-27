//jscs:disable requireShorthandArrowFunctions
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { resizeDimensions } from '../../actions';

const mapDispatchToProps = dispatch => {
  return {
    resizeDimensions: dimensions => dispatch(resizeDimensions(dimensions)),
  };
};

export const withResize = WrappedComponent => {
  class HOC extends Component {
    componentDidMount() {
      const { resizeDimensions } = this.props;
      resizeDimensions();
      window.addEventListener('resize', resizeDimensions);
    }

    componentWillUnmount() {
      const { resizeDimensions } = this.props;
      window.removeEventListener('resize', resizeDimensions);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  return connect(
    null,
    mapDispatchToProps
  )(HOC);
};
