import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUser, checkAuthStatus, loginUser, logoutUser } from '../../actions';

const mapStateToProps = ({ authReducer }) => {
  return {
    auid: authReducer.auid,
    authname: authReducer.authname,
    waiting: authReducer.waiting,
    showSignupForm: authReducer.showSignupForm,
    user_name: authReducer.user_name,
    password: authReducer.password,
    birth_date: authReducer.birth_date, //format ?
    userObj: authReducer.userObj,
    loginObj: authReducer.loginObj,
    authStatus: authReducer.authStatus,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createUser: userObj => dispatch(createUser(userObj)),
    checkAuthStatus: () => dispatch(checkAuthStatus()),
    loginUser: loginObj => dispatch(loginUser(loginObj)),
    logoutUser: () => dispatch(logoutUser()),
  };
};

// const withAuthUser = (WrappedComponent, api) => {
const withAuthUser = WrappedComponent => {
  class HOC extends Component {
    componentDidMount() {
      // if (api) this.props.createUser(api);
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
