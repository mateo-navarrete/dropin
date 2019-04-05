import React from "react";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Button from "@material-ui/core/Button";
import { IconHOC } from ".";
import { Link } from "react-router-dom";

export const StyledDropList = props => {
  console.log("@", props);
  let drops = props.drops;
  const renderNavBtns = drops.map((drop, i) => {
    const { type } = drop;
    let link = "/" + type;
    return (
      <Button key={"drop" + i} component={Link} to={link}>
        <BottomNavigationAction
          key={"drop" + i}
          label={type.toLowerCase()}
          value={type}
          icon={<IconHOC type={type} />}
        />
      </Button>
    );
  });

  return <>{renderNavBtns}</>;
};

// <BottomNavigationAction
//   key={"drop" + i}
//   label={type.toLowerCase()}
//   value={type}
//   icon={<IconHOC type={type} />}
// />
