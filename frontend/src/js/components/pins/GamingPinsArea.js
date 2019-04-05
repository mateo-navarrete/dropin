import React from "react";
import { withGamingDrops } from "../../containers";
import { Map } from "..";

const GamingPins = ({ drop, coords, ...props }) => {
  return (
    <>
    <Map coords={coords}/>
    </>
)
};
// <Map />

export const GamingPinsArea = withGamingDrops(GamingPins);
