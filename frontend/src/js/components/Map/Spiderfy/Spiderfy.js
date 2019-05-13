import React from 'react';
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
      circleFootSeparation: 60,
      spiralFootSeparation: 60,
      spiralLengthStart: 60,
      spiralLengthFactor: 4
    });
  }

  markerNodeMounted = (ref) => {
    console.log('@Marker',ref)
    if (ref.state) {
      console.log("ref ref", ref)
      this.tempMarkerFn(ref);
    } else {
      console.log("no ref no ref", ref)
    }
  };

  tempMarkerFn = ref => {
    let marker;
    marker = ref.state[MARKER];
    console.log("Spiderfy Marker", marker)
    this.oms.addMarker(marker);
    window.google.maps.event.addListener(marker, 'spider_click', e => {
      if (this.props.onSpiderClick) {
        this.props.onSpiderClick(e);
      } else {
        let markerId = marker.label;
      }
    });
  };

  render() {
    console.log("Spiderfy children", this.props.children)
    return React.Children.map(this.props.children, child => {
      console.log("spiderfy child", child)
      return (
      React.cloneElement(child, { ref: this.markerNodeMounted })
    )
    }
    );
  }
}

export default Spiderfy;
