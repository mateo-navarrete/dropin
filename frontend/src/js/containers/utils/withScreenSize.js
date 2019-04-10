import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSize } from '../../actions';

const mapStateToProps = ({ sizeReducer }) => {
  return {
    height: sizeReducer.height,
    marginLeft: sizeReducer.marginLeft,
    size: sizeReducer.size,
    width: sizeReducer.width,
    adjWidth: sizeReducer.adjWidth,
    pinsH: sizeReducer.pinsH,
    dropsH: sizeReducer.dropsH,
    droppersH: sizeReducer.droppersH,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // getSize: size => dispatch(getSize(size)),
  };
};

const withScreenSize = WrappedComponent => {
  class HOC extends Component {
    // componentDidMount() {
    //   if (!this.props.height) {
    //     this.getSize();
    //     window.addEventListener('resize', this.getSize);
    //   }
    // }

    // getSize = () => {
    //   this.props.getSize();
    // };
    //
    // componentWillUnmount() {
    //   window.removeEventListener('resize', this.updateSize);
    // }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(HOC);
};

export default withScreenSize;
