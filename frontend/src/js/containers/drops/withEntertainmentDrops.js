import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEntertainmentPins } from '../../actions';

const mapStateToProps = ({ entertainmentReducer }) => {
  return {
    drop: entertainmentReducer.drop,
    coords: entertainmentReducer.coords,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // getEntertainmentPins: userCoords => dispatch(getEntertainmentPins(userCoords)),
    getEntertainmentPins: type => dispatch(getEntertainmentPins(type)),
  };
};

const withEntertainmentDrops = WrappedComponent => {
  class HOC extends Component {
    componentDidMount() {
      this.props.getEntertainmentPins(2);
      // based on userCoords here    }
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

export default withEntertainmentDrops;
