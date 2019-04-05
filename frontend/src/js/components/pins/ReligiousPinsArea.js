import React from "react";
import { withReligiousDrops } from "../../containers";
import { Map } from "..";

const ReligiousPins = ({ drop, coords, ...props }) => {
  return (
    <>
    <Map coords={coords}/>
    </>
)
};
// <Map />

export const ReligiousPinsArea = withReligiousDrops(ReligiousPins);
