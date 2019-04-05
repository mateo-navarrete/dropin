import React from "react";
import { withMusicDrops } from "../../containers";
import { Map } from "..";

const MusicMap = ({ drop, coords, ...props }) => {
  console.log("@musicMapArea", props);
  const renderMusicPins = coords.map((coord, i) => {
    return (
      <div key={"pin" + i}>
        <Map />
        <div>{drop + i}</div>
        <div>latitude: {coord.latitude}</div>
        <div>latitude: {coord.longitude}</div>
      </div>
    );
  });
  return (
    <>
      <Map />
      {renderMusicPins}
    </>
  );
};

export const MusicMapArea = withMusicDrops(MusicMap);
