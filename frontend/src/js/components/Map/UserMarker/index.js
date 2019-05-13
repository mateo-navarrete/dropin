//jscs:disable requireShorthandArrowFunctions
import React, { Fragment as F } from "react";
import { EventMarker } from "../../EventMarker";
import userMarkerIcon from "../../../../assets/user_marker.png";
import { Marker } from "react-google-maps";
import  Spiderfy from "../Spiderfy/Spiderfy"
// export const UserMarker = ({ isMarkerShown, ...props }) => {
//   const renderView =
//     isMarkerShown && props.position.lat ? (
//       <EventMarker {...props} isUserMarker />
//     ) : (
//       ''
//     );
//   return <F>{renderView}</F>;
// };

export const UserMarker = ({ isMarkerShown, ...props }) => {
  console.log("user marker", props);
  const { lat, lng } = props.position;
  // const image = {
  //   url: userMarkerIcon,
  //   scaledSize: new google.maps.Size(60, 60)
  //   size: (60, 60)
  // };
  const renderView =
    isMarkerShown && props.position.lat ? (
      <Marker
        onClick={props.handleClick}
        position={{ lat: lat, lng: lng }}
        key="UserMarker"
        zIndex={100}
        icon={{
          url: userMarkerIcon,
          scaledSize: new window.google.maps.Size(45, 45)
        }}
        id="UserMarker"
      />
    ) : (
      ""
    );
  return <F>{renderView}</F>
};
