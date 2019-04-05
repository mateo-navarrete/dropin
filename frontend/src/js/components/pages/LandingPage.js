import React from "react";
import { DropBtnArea, PinDropBtnArea } from ".";
import Map from "../map/Map.js";

export const LandingPage = props => {
  return (
    <>
      <Map />
      <DropBtnArea />
      <PinDropBtnArea />
    </>
  );
};
