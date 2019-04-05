import React from "react";
import { withPartyDrops } from "../../containers";
import { Map } from "..";

const PartyPins = ({ drop, coords, ...props }) => {
  return (
    <>
    <Map coords={coords}/>
    </>
)
};
// <Map />

export const PartyPinsArea = withPartyDrops(PartyPins);
