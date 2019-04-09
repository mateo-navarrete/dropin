import React from "react";
import { withPartyDrops } from "../../containers";
import { Map } from "..";
import {PinModal} from "./modal/PinModal"


const PartyPins = ({ drop, coords, ...props }) => {
  return (
    <>
    <Map coords={coords}/>
    <PinModal coords={coords} />
    </>
)
};
// <Map />

export const PartyPinsArea = withPartyDrops(PartyPins);
