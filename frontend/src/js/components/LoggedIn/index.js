//jscs:disable requireShorthandArrowFunctions
import React, { Component, Fragment as F } from 'react';
import { Button } from './Button';
import { View } from './View';
import { Drawer } from '../material';

class WrappedComponent extends Component {
  state = {
    modal: false,
  };
  toggleModal = open => {
    this.setState({ modal: open });
  };

  render() {
    const { modal } = this.state;
    return (
      <F>
        <Button handleClick={() => this.toggleModal(true)} />
        <Drawer
          anchor="right"
          open={modal}
          onClose={() => this.toggleModal(false)}
        >
          <View handleClose={() => this.toggleModal(false)} />
        </Drawer>
      </F>
    );
  }
}

export const LoggedIn = WrappedComponent;
