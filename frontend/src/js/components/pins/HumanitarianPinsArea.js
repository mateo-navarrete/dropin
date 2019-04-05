import React from "react";
import { withMusicDrops } from "../../containers";
import { Map } from "..";

const HumanitarianPins = ({ drop, coords, ...props }) => {
  return (
    <>
    <Map coords={coords}/>
    </>
)
};
// <Map />

export const HumanitarianPinsArea = withMusicDrops(HumanitarianPins);
