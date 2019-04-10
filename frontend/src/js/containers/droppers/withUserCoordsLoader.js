import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserCoords } from '../../actions';

const mapDispatchToProps = dispatch => {
  return {
    getUserCoords: () => dispatch(getUserCoords()),
  };
};

const withUserCoordsLoader = WrappedComponent => {
  class HOC extends Component {
    componentDidMount() {
      this.props.getUserCoords();
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

export default withUserCoordsLoader;
