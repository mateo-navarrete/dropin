//jscs:disable requireShorthandArrowFunctions
import React, { Component, Fragment as F } from 'react';
import { View } from './View';
import { withUser, withGetEvents, withEvents } from '../../containers';
// import { Modal } from '../Modal';

class WrappedComponent extends Component {
  state = {
    showCoords: false,
  };
  toggleShowCoords = () => {
    this.setState({ showCoords: !this.state.showCoords });
  };

  render() {
    // const { showModal } = this.state;
    // const { handleClick, ...props } = this.props;
    // console.log("EVENT DETAILS INDEX PROPS", this.props);
    return (
      <F>
        <View
          {...this.props}
          toggleShowCoords={this.toggleShowCoords}
          showCoords={this.state.showCoords}
        />
      </F>
    );
  }
}

export const EventDetails = withGetEvents(withEvents(withUser(WrappedComponent)));
