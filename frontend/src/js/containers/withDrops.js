import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { getAuthUser } from '../actions';

const mapStateToProps = ({ dropsReducer }) => {
  return {
    drops: dropsReducer.drops,
    types: dropsReducer.types,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // getAuthUser: api => dispatch(getAuthUser(api)),
  };
};

const withDropsUser = (WrappedComponent, api) => {
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

export default withDropsUser;
