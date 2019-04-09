import React from "react";
import { withFamilyDrops } from "../../containers";
import { Map } from "..";
import {PinModal} from "./modal/PinModal"

const FamilyPins = ({ drop, coords, ...props }) => {
  return (
    <>
    <Map coords={coords}/>
    <PinModal coords={coords} />
    </>
)
};
// <Map />

export const FamilyPinsArea = withFamilyDrops(FamilyPins);
