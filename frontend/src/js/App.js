import React, { Component } from "react";
import { AuthUser, NavBar, SwitchRouter } from "./components";

export default class App extends Component {
  render() {
    return (
      <>
        <AuthUser />
        <NavBar />
        <SwitchRouter />
      </>
    );
  }
}
