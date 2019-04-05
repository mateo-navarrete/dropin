import React from "react";
import { withMusicDrops } from "../../containers";

const MusicMap = ({ drop, coords, ...props }) => {
  console.log("@musicMapArea", props);
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

export const MusicMapArea = withMusicDrops(MusicMap);
