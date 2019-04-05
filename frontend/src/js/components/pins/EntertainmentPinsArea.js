import React from "react";
import { withMusicDrops } from "../../containers";
import { Map } from "..";

const EntertainmentPins = ({ drop, coords, ...props }) => {
  return (
    <>
    <Map coords={coords}/>
    </>
)
};
// <Map />

export const EntertainmentPinsArea = withMusicDrops(EntertainmentPins);
