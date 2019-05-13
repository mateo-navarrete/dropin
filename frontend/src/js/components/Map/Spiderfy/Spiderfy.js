import React, { Fragment as F } from "react";
import PropTypes from "prop-types";
import { MAP, MARKER } from "react-google-maps/lib/constants";
// import { withOverlay } from '../../containers';

class Spiderfy extends React.Component {
  static contextTypes = {
    [MAP]: PropTypes.object
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

  // componentDidMount() {
  //   this.markerRef()
  // }

  markerRef = () => {
    return React.Children.map(this.props.children, child => {
      console.log("spiderfy child", child.props.children.props.id);
      return React.cloneElement(child.props.children, {
        ref: this.markerNodeMounted,
        id: child.props.children.props.id
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
    console.log("@Marker ref", ref);
    console.log("@Marker id", ref.props.id);
    if (ref) {
      console.log("ref ref", ref);
      this.tempMarkerFn(ref, ref.props.id);
    } else {
      console.log("no ref no ref", ref);
    }
  };

  tempMarkerFn = (ref, id) => {
    let marker;
    marker = ref.state[MARKER];
    console.log("Spiderfy Marker", marker);
    this.oms.addMarker(marker);
    window.google.maps.event.addListener(marker, "spider_click", e => {
      console.log("spiderfy addlistener", this.props);
      if (this.props.onSpiderClick) {
        console.log("Spidferfy clicked e", e);
        this.props.onSpiderClick(e);
      } else {
        let markerId = marker;
        console.log("Spidferfy clicked option 2", id);
        console.log("Spidferfy clicked option 2-2", e);

        this.props.onSpiderfyClick(true, id);
      }
    });
  };

  render() {
    console.log("spiderfy children", this.props.children);
    return (
      <F>
        {this.props.children ? this.markerRef() : null}
      </F>
    );
  }
}

export default Spiderfy;
