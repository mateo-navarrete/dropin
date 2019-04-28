//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { View } from './View';
import { LogoHeader } from '../logo';
import { MenuButton } from '../menu';
import { UserStatusButton } from '../user';

export const Header = props => {
  return (
    <View {...props}>
      <MenuButton />
      <LogoHeader height={props.height} color="red" />
      <UserStatusButton isLoggedIn={false} />
    </View>
  );
};
