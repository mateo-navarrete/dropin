import React from "react";
import {
  AreaWrapper,
  DroppersArea,
  DropsArea,
  PinsArea,
  PinModal,
  StepperModal
} from "..";

export const LandingPage = props => {
  return (
    <>
      <AreaWrapper wrapperH={"pinsH"} wrapperW={"width"} mL={false}>
        <PinModal />
        <StepperModal />
        <PinsArea />
      </AreaWrapper>
      <AreaWrapper wrapperH={"dropsH"} wrapperW={"adjWidth"} mL={true}>
        <DropsArea />
      </AreaWrapper>
      <AreaWrapper wrapperH={"droppersH"} wrapperW={"adjWidth"} mL={true}>
        <DroppersArea />
      </AreaWrapper>
    </>
  );
};
