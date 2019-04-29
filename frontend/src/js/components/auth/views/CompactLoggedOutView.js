//jscs:disable requireShorthandArrowFunctions
import React, { Component, Fragment as F } from 'react';
import { AuthOptionsView } from '.';
import { LoggedOutButton } from '../utils';
import { ModalView } from '../../utils';

class Wrapper extends Component {
  state = {
    modal: false,
  };
  toggleDrawer = open => {
    this.setState({ modal: open });
  };

  render() {
    const { modal } = this.state;
    return (
      <F>
        <LoggedOutButton handleClick={() => this.toggleDrawer(!modal)} />
        <ModalView modal={modal} handleClick={() => this.toggleDrawer(!modal)}>
          <AuthOptionsView {...this.props} />
        </ModalView>
      </F>
    );
  }
}

export const CompactLoggedOutView = Wrapper;
