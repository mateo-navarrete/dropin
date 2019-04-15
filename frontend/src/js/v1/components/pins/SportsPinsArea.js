import React from "react";
import { withSportsDrops } from "../../containers";
import MainMap from "../main/MainMap";
// import { Map } from "..";
import { PinModal } from "./modal/PinModal";

const SportsPins = props => {
  return (
    <>
      <MainMap {...props} />
      <PinModal {...props} />
    </>
  );
};

export const SportsPinsArea = withSportsDrops(SportsPins);
