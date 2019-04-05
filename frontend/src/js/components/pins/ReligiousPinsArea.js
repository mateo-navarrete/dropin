import React from "react";
import { withMusicDrops } from "../../containers";
import { Map } from "..";

const ReligiousPins = ({ drop, coords, ...props }) => {
  return (
    <>
    <Map coords={coords}/>
    </>
)
};
// <Map />

export const ReligiousPinsArea = withMusicDrops(ReligiousPins);
