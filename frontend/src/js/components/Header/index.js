//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { View } from './View';
import { ToggleMenuButton, ToggleSettingsButton } from '../buttons';
import { LogoHeader } from '../logo';

export const Header = props => {
  return (
    <View {...props}>
      <ToggleSettingsButton />
      <LogoHeader height={props.height} color='red'/>
      <ToggleMenuButton />
    </View>
  );
};
