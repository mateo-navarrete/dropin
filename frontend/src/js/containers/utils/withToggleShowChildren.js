//jscs:disable requireShorthandArrowFunctions
import React, { Component } from 'react';

export const withToggleShowChildren = WrappedComponent => {
  class HOC extends Component {
    state = {
      showChildren: true,
    };
    toggleShowChildren = () => {
      this.setState(state => ({ showChildren: !state.showChildren }));
    };

    render() {
      return (
        <WrappedComponent
          {...this.props}
          {...this.state}
          toggleShowChildren={this.toggleShowChildren}
        />
      );
    }
  }
  return HOC;
};
