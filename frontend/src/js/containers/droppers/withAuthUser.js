import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUser } from '../../actions';

const mapStateToProps = ({ authReducer }) => {
  return {
    auid: authReducer.auid,
    authname: authReducer.authname,
    waiting: authReducer.waiting,
    showSignupForm: authReducer.showSignupForm,
    username: authReducer.username,
    password_digest: authReducer.password_digest,
    birth_date: authReducer.birth_date, //format ?
    userObj: authReducer.userObj,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createUser: userObj => dispatch(createUser(userObj)),
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
