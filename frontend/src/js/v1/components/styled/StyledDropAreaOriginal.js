import React from "react";
// import PropTypes from 'prop-types';
import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
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
} from ".";
import { withDrops } from "../../containers";

// import Icon from '@material-ui/core/Icon';
// import EducationIcon from "@material-ui/icons/School";
// import EntertainmentIcon from "@material-ui/icons/Star";
// import FamilyIcon from "@material-ui/icons/Favorite";
// import FoodIcon from "@material-ui/icons/Fastfood";
// import GamingIcon from "@material-ui/icons/VideogameAsset";
// import HumanitarianIcon from "@material-ui/icons/Public";
// import MusicIcon from "@material-ui/icons/Headset";
// import PartyIcon from "@material-ui/icons/Whatshot";
// import ReligiousIcon from "@material-ui/icons/Looks";
// import SportsIcon from "@material-ui/icons/Flag";

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
  Sports: SportsIcon
};

const IconHOC = ({ type }) => {
  // console.log(type);
  const HOC = ICONS[type] || "div";
  return <HOC />;
};

const styles = {
  root: {
    width: 500
  }
};

class LabelBottomNavigation extends React.Component {
  state = {
    value: "family"
  };

  handleChange = (e, value) => {
    this.setState({ value });
  };

  render() {
    const { classes, drops } = this.props;
    const { value } = this.state;
    const dropTops = drops.slice(0, 5);
    const dropBtms = drops.slice(5);
    // console.log(dropTops, dropBtms);
    const renderNavBtnsTop =
      drops && drops.length
        ? dropTops.map((drop, i) => {
            const { type } = drop;
            return (
              <BottomNavigationAction
                key={"drop" + i}
                label={type.toLowerCase()}
                value={type}
                icon={<IconHOC type={type} />}
              />
            );
          })
        : "";

    const renderNavBtnsBtm =
      drops && drops.length
        ? dropBtms.map((drop, i) => {
            const { type } = drop;
            return (
              <BottomNavigationAction
                key={"drop" + i}
                label={type.toLowerCase()}
                value={type}
                icon={<IconHOC type={type} />}
              />
            );
          })
        : "";

    return (
      <>
        <BottomNavigation
          value={value}
          onChange={this.handleChange}
          className={classes.root}
        >
          {renderNavBtnsTop}
        </BottomNavigation>

        <BottomNavigation
          value={value}
          onChange={this.handleChange}
          className={classes.root}
        >
          {renderNavBtnsBtm}
        </BottomNavigation>
      </>
    );
  }
}

// <BottomNavigationAction
//   label="Education"
//   value="education"
//   icon={<EducationIcon />}
// />
// <BottomNavigationAction
//   label="Entertainment"
//   value="entertainment"
//   icon={<EntertainmentIcon />}
// />
// <BottomNavigationAction
//   label="Family"
//   value="family"
//   icon={<FamilyIcon />}
// />
// <BottomNavigationAction
//   label="Food"
//   value="food"
//   icon={<FoodIcon />}
// />
// <BottomNavigationAction
//   label="Gaming"
//   value="gaming"
//   icon={<GamingIcon />}
// />
// </BottomNavigation>
//
// <BottomNavigation
// value={value}
// onChange={this.handleChange}
// className={classes.root}
// >
// <BottomNavigationAction
//   label="Humanitarian"
//   value="humanitarian"
//   icon={<HumanitarianIcon />}
// />
// <BottomNavigationAction
//   label="Music"
//   value="music"
//   icon={<MusicIcon />}
// />
// <BottomNavigationAction
//   label="Party"
//   value="party"
//   icon={<PartyIcon />}
// />
// <BottomNavigationAction
//   label="Religious"
//   value="religious"
//   icon={<ReligiousIcon />}
// />
// <BottomNavigationAction
//   label="Sports"
//   value="sports"
//   icon={<SportsIcon />}
// />

// <BottomNavigationAction;
//   label="Folder"
//   value="folder"
//   icon={<Icon>folder</Icon>}
// />

// LabelBottomNavigation.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withDrops(withStyles(styles)(LabelBottomNavigation));
