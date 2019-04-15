import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { getUserCoords } from '../../actions';

const mapStateToProps = ({ userCoordsReducer }) => {
  return {
    loading: userCoordsReducer.loading,
    userCoords: userCoordsReducer.userCoords,
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     getUserCoords: () => dispatch(getUserCoords()),
//   };
// };

const withUserCoords = WrappedComponent => {
  class HOC extends Component {
    // componentDidMount() {
    //   this.props.getUserCoords();
    //   // function successFunction(position) {
    //   //   let lat = position.coords.latitude;
    //   //   let long = position.coords.longitude;
    //   //   console.log("Your latitude is: " + lat + " and longitude is: " + long);
    //   // }
    //   //
    //   // function errorFunction(position) {
    //   //   console.log("Error!", position);
    //   // }
    //   //
    //   // window.navigator.geolocation.getCurrentPosition(
    //   //   successFunction,
    //   //   errorFunction
    //   // );
    //   //obvs you could clean this up and turn it into es6 etc
    //   //lemme know if this helped!
    // }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  return connect(
    mapStateToProps,
    null
    // mapDispatchToProps
  )(HOC);
};

export default withUserCoords;
