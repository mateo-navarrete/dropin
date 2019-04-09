import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSportsEvents } from '../../actions';

const mapStateToProps = ({ sportsReducer }) => {
  return {
    drop: sportsReducer.drop,
    coords: sportsReducer.coords,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSportsEvents: userCoords => dispatch(getSportsEvents(userCoords)),
  };
};

const withSportsDrops = (WrappedComponent, api) => {
  class HOC extends Component {
    componentDidMount() {
      this.props.getSportsEvents(3);
      //TODO: { category_id, latitude, longitude}
      // based on userCoords here
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

export default withSportsDrops;
