import React from "react";
import { withSportsDrops } from "../../containers";
import { Map } from "..";
import {PinModal} from "./modal/PinModal"

const SportsPins = ({ drop, coords, ...props }) => {
  return (
    <>
    <Map coords={coords}/>
    <PinModal coords={coords} />
    </>
)
};

export const SportsPinsArea = withSportsDrops(SportsPins);
