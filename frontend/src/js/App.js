import React, { Component } from "react";
import {
  OverlayArea,
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
        <OverlayArea />
        <MainArea />
        <NavBarArea />
        <ActionBarArea />
      </>
    );
  }
}
