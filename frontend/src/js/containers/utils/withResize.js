import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSize } from '../../actions';

const mapDispatchToProps = dispatch => {
  return {
    getSize: size => dispatch(getSize(size)),
  };
};

const withResize = WrappedComponent => {
  class HOC extends Component {
    componentDidMount() {
      if (!this.props.height) {
        this.props.getSize();
        window.addEventListener('resize', this.props.getSize);
      }
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.props.getSize);
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

export default withResize;
