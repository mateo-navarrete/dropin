//jscs:disable requireShorthandArrowFunctions
import React, { Component, Fragment as F } from 'react';
import { View } from './View';
// import { Modal } from '../Modal';
// import { EventDetails } from '../EventDetails';
import { withUser } from '../../containers';

class WrappedComponent extends Component {
  render() {
    return (
      <F>
        <View {...this.props} />
      </F>
    );
  }
}

export const EventDraft = withUser(WrappedComponent);
