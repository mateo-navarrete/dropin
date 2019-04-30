//jscs:disable requireShorthandArrowFunctions
import React, { Component, Fragment as F } from 'react';
import { LoggedInMenu } from './LoggedInMenu';
import { ShowLoggedInMenuButton } from './ShowLoggedInMenuButton';
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
        <ShowLoggedInMenuButton handleClick={() => this.toggleModal(true)} />
        <Drawer
          anchor="right"
          open={modal}
          onClose={() => this.toggleModal(false)}
        >
          <LoggedInMenu
            closeModal={() => this.toggleModal(false)}
            {...this.props}
          />
        </Drawer>
      </F>
    );
  }
}

export const LoggedIn = WrappedComponent;
