import React from 'react';
import { FamilyIcon, PartyIcon, SportsIcon } from '.';

const ICONS = {
  family: FamilyIcon,
  party: PartyIcon,
  sports: SportsIcon,
};

export const IconWrapper = ({ name, ...props }) => {
  const HOC = ICONS[name] || 'div';
  return <HOC fontSize="large" {...props} />;
};
