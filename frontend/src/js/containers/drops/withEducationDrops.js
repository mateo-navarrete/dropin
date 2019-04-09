import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEducationPins } from '../../actions';

const mapStateToProps = ({ educationReducer }) => {
  return {
    drop: educationReducer.drop,
    coords: educationReducer.coords,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // getEducationPins: userCoords => dispatch(getEducationPins(userCoords)),
    getEducationPins: type => dispatch(getEducationPins(type)),
  };
};

const withEducationDrops = (WrappedComponent) => {
  class HOC extends Component {
    componentDidMount() {
      this.props.getEducationPins(1);
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

export default withEducationDrops;
