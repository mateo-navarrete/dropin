import React from 'react';
import EducationIcon from '@material-ui/icons/School';
import EntertainmentIcon from '@material-ui/icons/Star';
import FamilyIcon from '@material-ui/icons/Favorite';
import FoodIcon from '@material-ui/icons/Fastfood';
import GamingIcon from '@material-ui/icons/VideogameAsset';
import HumanitarianIcon from '@material-ui/icons/Public';
import MusicIcon from '@material-ui/icons/Headset';
import PartyIcon from '@material-ui/icons/Whatshot';
import ReligiousIcon from '@material-ui/icons/Looks';
import SportsIcon from '@material-ui/icons/Flag';

export {
  EducationIcon,
  EntertainmentIcon,
  FamilyIcon,
  FoodIcon,
  GamingIcon,
  HumanitarianIcon,
  MusicIcon,
  PartyIcon,
  ReligiousIcon,
  SportsIcon
};

const ICONS = {
  Education: EducationIcon,
  Entertainment: EntertainmentIcon,
  Family: FamilyIcon,
  Food: FoodIcon,
  Gaming: GamingIcon,
  Humanitarian: HumanitarianIcon,
  Music: MusicIcon,
  Party: PartyIcon,
  Religious: ReligiousIcon,
  Sports: SportsIcon,
};

export const IconHOC = ({ type }) => {
  const HOC = ICONS[type] || 'div';
  return <HOC />;
};
