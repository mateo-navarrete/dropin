import React from 'react';
// import { withStyles } from "@material-ui/core/styles";
// import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import {
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
} from '..';

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

const IconHOC = props => {
  const HOC = ICONS[props.type] || 'div';
  return <HOC {...props} />;
};

export const DropBtn = ({ icon, type, value, onChange, ...props }) => {
  console.log(props);
  return (
    <BottomNavigationAction
      label={type}
      value={type.toLowerCase()}
      icon={
        <IconHOC icon={icon} type={type} value={value} onChange={onChange} />
      }
    />
  );
};

// <div>{icon}</div>
// <h1 className="lato">{type}</h1>
