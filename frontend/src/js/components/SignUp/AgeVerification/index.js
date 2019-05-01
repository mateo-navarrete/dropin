//jscs:disable requireShorthandArrowFunctions
import React, { Component, Fragment as F } from 'react';
import { View } from './View';

class WrappedComponent extends Component {
  state = {
    isUnder18: true,
  };
  handleSubmit = event => {
    event.preventDefault();
    const { isUnder18 } = this.state;
    if (!isUnder18) this.props.hideAgeVerification();
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value + '' === 'true',
    });
  };

  render() {
    const { isUnder18 } = this.state;
    return (
      <F>
        <View
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          isUnder18={isUnder18}
        />
      </F>
    );
  }
}

export const AgeVerification = WrappedComponent;
