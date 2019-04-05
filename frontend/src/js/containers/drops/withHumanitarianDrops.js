import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { getHumanitarianPins } from '../actions';

const mapStateToProps = ({ humanitarianReducer }) => {
  return {
    drop: humanitarianReducer.drop,
    coords: humanitarianReducer.coords,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // getHumanitarianPins: userCoords => dispatch(getHumanitarianPins(userCoords)),
  };
};

const withHumanitarianDrops = (WrappedComponent, api) => {
  class HOC extends Component {
    componentDidMount() {
      //getHumanitarianPins based on userCoords here
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

export default withHumanitarianDrops;
