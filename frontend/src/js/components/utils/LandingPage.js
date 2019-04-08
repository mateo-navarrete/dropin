import React from "react";
import { DroppersArea, DropsArea, PinsArea } from "..";
import { PinModal } from "../pins/modal/PinModal";

export const LandingPage = props => {
  return (
    <>
      <PinModal />
      <PinsArea />
      <DropsArea />
      <DroppersArea />
    </>
  );
};
