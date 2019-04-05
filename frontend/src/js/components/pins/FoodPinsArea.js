import React from "react";
import { withFoodDrops } from "../../containers";
// import { Map } from "..";

const FoodPins = ({ drop, coords, ...props }) => {
  console.log("@foodPinsArea", props);
  const renderFoodPins = coords.map((coord, i) => {
    return (
      <div key={"pin" + i}>
        <div>{drop + i}</div>
        <div>latitude: {coord.latitude}</div>
        <div>latitude: {coord.longitude}</div>
      </div>
    );
  });
  return <>{renderFoodPins}</>;
};
// <Map />

export const FoodPinsArea = withFoodDrops(FoodPins);
