import React from "react";
import PropTypes from "prop-types";
import { MAP, MARKER } from "react-google-maps/lib/constants";
import { withOverlay } from "../../containers";

class Spiderfy extends React.Component {
  static contextTypes = {
    [MAP]: PropTypes.object
  };

  constructor(props, context) {
    super(props, context);
    const oms = require(`npm-overlapping-marker-spiderfier/lib/oms.min`);
    this.oms = new oms.OverlappingMarkerSpiderfier(this.context[MAP], {
      keepSpiderfied: true
    });
  }

  markerNodeMounted = ref => {
    const { showTopOverlay, eventCoords, loading } = this.props;
    let marker
    if (ref.state[MARKER]) {
      marker = ref.state[MARKER];
      this.oms.addMarker(marker);
      window.google.maps.event.addListener(marker, "spider_click", e => {
        if (this.props.onSpiderClick) {
          this.props.onSpiderClick(e);
        } else {
          let markerId = marker.label;
          showTopOverlay(markerId);
        }
      })
    } else {
      console.log("Zero is REALLY REALLY NOT ZERO");
      return null;
    }
  };

  render() {
    return React.Children.map(this.props.children, child =>
      React.cloneElement(child, { ref: this.markerNodeMounted })
    );
  }
}

export default withOverlay(Spiderfy);
