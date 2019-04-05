import React from "react";
import { withEducationDrops } from "../../containers";
import { Map } from "..";

const EducationPins = ({ drop, coords, ...props }) => {
  return (
    <>
    <Map coords={coords}/>
    </>
)
};
// <Map />

export const EducationPinsArea = withEducationDrops(EducationPins);
