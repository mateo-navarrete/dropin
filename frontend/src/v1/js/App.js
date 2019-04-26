import React, { Component } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
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
        <CssBaseline />
        <OverlayArea />
        <MainArea />
        <NavBarArea />
        <ActionBarArea />
      </>
    );
  }
}
