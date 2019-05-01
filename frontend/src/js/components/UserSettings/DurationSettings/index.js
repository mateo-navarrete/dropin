//jscs:disable requireShorthandArrowFunctions
import React, { Component } from 'react';
import { View } from './View';

class WrappedComponent extends Component {
  state = {
    open: false,
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    return <View {...this.state} handleClick={this.handleClick} />;
  }
}

export const DurationSettings = WrappedComponent;

// export const UserSettings = withUser(WrappedComponent);
