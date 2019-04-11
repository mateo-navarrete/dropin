import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserCoords } from '../../actions';

const mapStateToProps = ({ userCoordsReducer }) => {
  return {
    userCoords: userCoordsReducer.userCoords,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserCoords: () => dispatch(getUserCoords()),
  };
};

const withUserCoordsLoader = WrappedComponent => {
  class HOC extends Component {
    componentDidMount() {
      const { userCoords, getUserCoords } = this.props;
      if (!userCoords.latitude) {
        getUserCoords();
      }
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

export default withUserCoordsLoader;
