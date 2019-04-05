import React from "react";
import { withMusicDrops } from "../../containers";
import { Map } from "..";

const GamingPins = ({ drop, coords, ...props }) => {
  return (
    <>
    <Map coords={coords}/>
    </>
)
};
// <Map />

export const GamingPinsArea = withMusicDrops(GamingPins);
