//jscs:disable requireShorthandArrowFunctions
import React, { Component, Fragment as F } from 'react';
import { View } from './View';
import { withAuth } from '../../containers';

class WrappedComponent extends Component {
  state = {
    open: false,
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    const { user } = this.props;
    const renderView = user ? (
      <View {...this.state} handleClick={this.handleClick} />
    ) : (
      ''
    );
    return <F>{renderView}</F>;
  }
}

export const UserHistory = withAuth(WrappedComponent);
