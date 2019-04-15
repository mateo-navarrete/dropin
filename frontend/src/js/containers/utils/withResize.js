import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getResize } from '../../actions';

const mapDispatchToProps = dispatch => {
  return {
    getResize: size => dispatch(getResize(size)),
  };
};

export const withResize = WrappedComponent => {
  class HOC extends Component {
    componentDidMount() {
      const { getResize } = this.props;
      getResize();
      window.addEventListener('resize', getResize);
    }

    componentWillUnmount() {
      const { getResize } = this.props;
      window.removeEventListener('resize', getResize);
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
