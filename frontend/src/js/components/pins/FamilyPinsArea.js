import React from "react";
import { withFamilyDrops } from "../../containers";
import { Map } from "..";

const FamilyPins = ({ drop, coords, ...props }) => {
  return (
    <>
    <Map coords={coords}/>
    </>
)
};
// <Map />

export const FamilyPinsArea = withFamilyDrops(FamilyPins);
