import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAuthUser } from '../actions';

const mapStateToProps = ({ authReducer }) => {
  return {
    auid: authReducer.auid,
    authname: authReducer.authname,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAuthUser: api => dispatch(getAuthUser(api)),
  };
};

const withAuthUser = (WrappedComponent, api) => {
  class HOC extends Component {
    componentDidMount() {
      if (api) this.props.getAuthUser(api);
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

export default withAuthUser;
