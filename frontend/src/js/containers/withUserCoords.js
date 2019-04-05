import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { getAuthUser } from '../actions';

const mapStateToProps = ({ userCoordsReducer }) => {
  return {
    userCoords: userCoordsReducer.userCoords,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // getAuthUser: api => dispatch(getAuthUser(api)),
  };
};

const withUserCoords = (WrappedComponent, api) => {
  class HOC extends Component {
    // componentDidMount(){
    //
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

export default withUserCoords;
