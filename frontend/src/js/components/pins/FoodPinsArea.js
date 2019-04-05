import React from "react";
import { withFoodDrops } from "../../containers";
import { Map } from "..";

const FoodPins = ({ drop, coords, ...props }) => {
  return <><Map coords={coords}/></>;
};

export const FoodPinsArea = withFoodDrops(FoodPins);
