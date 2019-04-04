import React, { Component } from "react";
import { AuthUser, SwitchRouter } from "./components";

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
