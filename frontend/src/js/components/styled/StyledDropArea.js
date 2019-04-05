import React from "react";
import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { IconHOC, StyledDropList } from ".";
import { withDrops } from "../../containers";

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
      drops && drops.length ? (
        <StyledDropList drops={dropTops} />
      ) : (
        // dropTops.map((drop, i) => {
        //     const { type } = drop;
        //     return (
        //       <BottomNavigationAction
        //         key={"drop" + i}
        //         label={type.toLowerCase()}
        //         value={type}
        //         icon={<IconHOC type={type} />}
        //       />
        //     );
        //   })

        ""
      );

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

export default withDrops(withStyles(styles)(LabelBottomNavigation));
