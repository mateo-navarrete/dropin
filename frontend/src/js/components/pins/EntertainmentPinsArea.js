import React from "react";
import { withEntertainmentDrops } from "../../containers";
import { Map } from "..";

const EntertainmentPins = ({ drop, coords, ...props }) => {
  return (
    <>
    <Map coords={coords}/>
    </>
)
};
// <Map />

export const EntertainmentPinsArea = withEntertainmentDrops(EntertainmentPins);
