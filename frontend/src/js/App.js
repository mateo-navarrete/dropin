import React, { Component } from "react";
import { AuthUser, UserCoords, SwitchRouter } from "./components";

export default class App extends Component {
  render() {
    return (
      <>
        <AuthUser />
        <SwitchRouter />
      </>
    );
  }
}
