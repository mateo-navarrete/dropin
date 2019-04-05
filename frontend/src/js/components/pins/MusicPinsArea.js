import React from "react";
import { withMusicDrops } from "../../containers";
import { Map } from "..";

const MusicPins = ({ drop, coords, ...props }) => {
  return (
    <>
    <Map coords={coords}/>
    </>
)
};
// <Map />

export const MusicPinsArea = withMusicDrops(MusicPins);
