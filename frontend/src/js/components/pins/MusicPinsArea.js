import React from "react";
import { withMusicDrops } from "../../containers";
// import { Map } from "..";

const MusicPins = ({ drop, coords, ...props }) => {
  console.log("@musicPinsArea", props);
  const renderMusicPins = coords.map((coord, i) => {
    return (
      <div key={"pin" + i}>
        <div>{drop + i}</div>
        <div>latitude: {coord.latitude}</div>
        <div>latitude: {coord.longitude}</div>
      </div>
    );
  });
  return <>{renderMusicPins}</>;
};
// <Map />

export const MusicPinsArea = withMusicDrops(MusicPins);
