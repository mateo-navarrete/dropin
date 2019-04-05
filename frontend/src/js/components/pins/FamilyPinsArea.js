import React from "react";
import { withMusicDrops } from "../../containers";
import { Map } from "..";

const FamilyPins = ({ drop, coords, ...props }) => {
  return (
    <>
    <Map coords={coords}/>
    </>
)
};
// <Map />

export const FamilyPinsArea = withMusicDrops(FamilyPins);
