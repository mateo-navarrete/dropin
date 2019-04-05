import React from "react";
import { withSportsDrops } from "../../containers";
import { Map } from "..";

const SportsPins = ({ drop, coords, ...props }) => {
  return (
    <>
    <Map coords={coords}/>
    </>
)
};

export const SportsPinsArea = withSportsDrops(SportsPins);
