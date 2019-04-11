import React from "react";
import { withPartyDrops } from "../../containers";
// import { Map } from "..";
import MainMap from "../main/MainMap";

import { PinModal } from "./modal/PinModal";

const PartyPins = props => {
  return (
    <>
      <MainMap {...props} />
      <PinModal {...props} />
    </>
  );
};
// <Map />

export const PartyPinsArea = withPartyDrops(PartyPins);
