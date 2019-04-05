import React from "react";
import { withMusicDrops } from "../../containers";
import { Map } from "..";

const EducationPins = ({ drop, coords, ...props }) => {
  return (
    <>
    <Map coords={coords}/>
    </>
)
};
// <Map />

export const EducationPinsArea = withMusicDrops(EducationPins);
