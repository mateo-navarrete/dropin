import React from "react";
import { withFoodDrops } from "../../containers";
import { Map } from "..";

const FoodMap = ({ drop, coords, ...props }) => {
  console.log("@foodMapArea", props);
  const renderFoodPins = coords.map((coord, i) => {
    return (
      <div key={"pin" + i}>
        <div>{drop + i}</div>
        <div>latitude: {coord.latitude}</div>
        <div>latitude: {coord.longitude}</div>
      </div>
    );
  });
  return (
    <>
      <Map />
      {renderFoodPins}
    </>
  );
};

export const FoodMapArea = withFoodDrops(FoodMap);
