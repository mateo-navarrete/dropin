import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPartyEvents } from '../../actions';

const mapStateToProps = ({ partyReducer }) => {
  return {
    drop: partyReducer.drop,
    coords: partyReducer.coords,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPartyEvents: userCoords => dispatch(getPartyEvents(userCoords)),
  };
};

const withPartyDrops = (WrappedComponent, api) => {
  class HOC extends Component {
    componentDidMount() {
      this.props.getPartyEvents(2);
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

export default withPartyDrops;
