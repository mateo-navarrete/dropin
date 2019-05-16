import React, { Fragment as F } from 'react';
import PropTypes from 'prop-types';
import { MAP, MARKER } from 'react-google-maps/lib/constants';
// import { withOverlay } from '../../containers';

class Spiderfy extends React.Component {
  static contextTypes = {
    [MAP]: PropTypes.object,
  };

  constructor(props, context) {
    super(props, context);
    const oms = require(`npm-overlapping-marker-spiderfier/lib/oms.min`);
    this.oms = new oms.OverlappingMarkerSpiderfier(this.context[MAP], {
      keepSpiderfied: true,
      circleFootSeparation: 70,
      spiralFootSeparation: 70,
      spiralLengthStart: 70,
      spiralLengthFactor: 4,
      nearbyDistance: 30,
    });
  }

  // componentDidMount() {
  //   this.markerRef()
  // }

  markerRef = () => {
    return React.Children.map(this.props.children, child => {
      return React.cloneElement(child.props.children, {
        ref: this.markerNodeMounted,
        id: child.props.children.props.id,
      });
    });
  };

  // modalRender = () => {
  //   return React.Children.map(this.props.children, child => {
  //     console.log("spiderfy child", child.props.children[1]);
  //     return React.cloneElement(child.props.children[1]);
  //   });
  // };

  markerNodeMounted = (ref, id) => {
    if (ref) {
      this.tempMarkerFn(ref, ref.props.id);
    } else {
    }
  };

  tempMarkerFn = (ref, id) => {
    let marker;
    marker = ref.state[MARKER];
    this.oms.addMarker(marker);
    window.google.maps.event.addListener(marker, 'spider_click', e => {
      if (this.props.onSpiderClick) {
        this.props.onSpiderClick(e);
      } else {
        // let markerId = marker;

        this.props.onSpiderfyClick(true, id);
      }
    });
  };

  render() {
    return <F>{this.props.children ? this.markerRef() : null}</F>;
  }
}

export default Spiderfy;
