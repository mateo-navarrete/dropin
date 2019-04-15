import React, { Component } from "react";
import {
  OverlayAreaCopy,
  ActionBarArea,
  MainArea,
  NavBarArea,
  // AuthUser,
  UserCoordsListener,
  ResizeListener
} from "./components";

export default class App extends Component {
  render() {
    return (
      <>
        <ResizeListener />
        <UserCoordsListener />
        <OverlayAreaCopy />
        <MainArea />
        <NavBarArea />
        <ActionBarArea />
      </>
    );
  }
}
