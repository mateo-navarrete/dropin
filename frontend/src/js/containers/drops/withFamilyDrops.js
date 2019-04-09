import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFamilyEvents } from '../../actions';

const mapStateToProps = ({ familyReducer }) => {
  return {
    drop: familyReducer.drop,
    coords: familyReducer.coords,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getFamilyEvents: userCoords => dispatch(getFamilyEvents(userCoords)),
  };
};

const withFamilyDrops = (WrappedComponent, api) => {
  class HOC extends Component {
    componentDidMount() {
      this.props.getFamilyEvents(1);
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

export default withFamilyDrops;
