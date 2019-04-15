import React, { Component } from "react";
import {
  AuthUser,
  UserCoordsListener,
  // SwitchRouter,
  LandingPage,
  ResizeListener
} from "./components";

export default class App extends Component {
  render() {
    return (
      <>
        <ResizeListener />
        <UserCoordsListener />
        <AuthUser />
        <LandingPage />
      </>
    );
  }
}
// <SwitchRouter />
