import React, { Component } from "react";
import {
  AuthUser,
  UserCoordsListener,
  SwitchRouter,
  ResizeListener
} from "./components";

export default class App extends Component {
  render() {
    return (
      <>
        <ResizeListener />
        <UserCoordsListener />
        <AuthUser />
        <SwitchRouter />
      </>
    );
  }
}
