import React from "react";
import { withMusicDrops } from "../../containers";
import { Map } from "..";

const SportsPins = ({ drop, coords, ...props }) => {
  return (
    <>
    <Map coords={coords}/>
    </>
)
};
// <Map />

export const SportsPinsArea = withMusicDrops(SportsPins);
