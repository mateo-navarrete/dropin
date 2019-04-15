import React from "react";
// import {
//   // AreaWrapper,
//   // DroppersArea,
//   // DropsArea,
//   // PinsArea,
//   // PinModal,
//   // StepperModal,
//   // StyledBottomDrawer
// } from "..";
// import { OverlayArea } from "../overlay";
import { OverlayAreaCopy } from "../overlay";
import { MainArea } from "../main";
import { NavBarArea } from "../navBar";
import { ActionBarArea } from "../actionBar";
import "../../../styles/landing.css";

// <OverlayArea />

export const LandingPage = props => {
  return (
    <>
      <OverlayAreaCopy />
      <MainArea />
      <NavBarArea />
      <ActionBarArea />
    </>
  );
};

// <AreaWrapper wrapperH={"pinsH"} wrapperW={"width"} mL={false}>
//   <PinModal />
//   <StyledBottomDrawer />
//   <PinsArea />
// </AreaWrapper>
// <AreaWrapper wrapperH={"dropsH"} wrapperW={"adjWidth"} mL={true}>
//   <DropsArea />
// </AreaWrapper>
// <AreaWrapper wrapperH={"droppersH"} wrapperW={"adjWidth"} mL={true}>
//   <DroppersArea />
// </AreaWrapper>
