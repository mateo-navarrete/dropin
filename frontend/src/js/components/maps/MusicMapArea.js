import React from "react";
import { withMusicDrops } from "../../containers";

const authID = 1;

const MusicMap = ({ drop, coords, ...props }) => {
  console.log(drop, coords, props);
  const renderMusicPins = coords.map((coord, i) => {
    return (
      <>
        <div>{drop + i}</div>
        <div>latitude: {coord.latitude}</div>
        <div>latitude: {coord.longitude}</div>
      </>
    );
  });
  return { renderMusicPins };
};

export const MusicMapArea = withMusicDrops(MusicMap, authID);
