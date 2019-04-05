import React from "react";
import {
  // MapArea,
  NavBarArea,
  DropBtnArea
} from ".";
import { MapsRouter } from "..";

export const DropsPage = props => {
  return (
    <>
      <MapsRouter />
      <NavBarArea />
      <DropBtnArea />
    </>
  );
};
// <MapArea />
