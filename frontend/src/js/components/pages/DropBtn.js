import React from "react";

export const DropBtn = ({ icon, type }) => {
  return (
    <>
      <div>{icon}</div>
      <h1 className="lato">{type}</h1>
    </>
  );
};
