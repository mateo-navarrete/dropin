import React from "react";
import { withFamilyDrops } from "../../containers";
import MainMap from "../main/MainMap";
// import { Map } from "..";
import { PinModal } from "./modal/PinModal";

const FamilyPins = props => {
  return (
    <>
      <MainMap {...props} />
      <PinModal {...props} />
    </>
  );
};
// <Map />

export const FamilyPinsArea = withFamilyDrops(FamilyPins);
