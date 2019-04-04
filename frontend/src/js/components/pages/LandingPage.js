import React from "react";
import { DropRoutes, NavBar } from ".";
import Map from "../map/Map.js";

export const LandingPage = props => {
  return (
    <>
      <h1 className="lato">d r o p i n</h1>
      <NavBar />
      <Map />
      <DropRoutes />
    </>
  );
};