import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSize } from '../../actions';

const mapStateToProps = ({ sizeReducer }) => {
  return {
    height: sizeReducer.height,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSize: size => dispatch(getSize(size)),
  };
};

const withResize = WrappedComponent => {
  class HOC extends Component {
    componentDidMount() {
      const { height, getSize } = this.props;
      if (!height) {
        getSize();
        window.addEventListener('resize', getSize);
      }
    }

    componentWillUnmount() {
      const { getSize } = this.props;
      window.removeEventListener('resize', getSize);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(HOC);
};

export default withResize;
