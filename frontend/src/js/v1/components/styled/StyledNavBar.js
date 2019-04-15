import React from "react";
import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { IconHOC, StyledDropList } from ".";
import { withDrops } from "../../containers";
import { Link } from "react-router-dom";

// const styles = theme => ({
//   button: {
//     margin: theme.spacing.unit
//   },
//   input: {
//     display: "none"
//   }
// });

class LabelBottomNavigation extends React.Component {
  state = {
    value: "family"
  };

  handleChange = (e, value) => {
    // console.log(e);
    this.setState({ value });
  };

  render() {
    const { classes, drops, ...props } = this.props;
    const { value } = this.state;
    // console.log(this.props);
    // console.log(drops)
    // const dropTops = drops.slice(0, 5);
    // const dropBtms = drops.slice(5);
    // console.log(dropTops, dropBtms);
    const renderNavBtns =
      drops && drops.length
        ? // <StyledDropList drops={dropTops} />
          drops.map((drop, i) => {
            const { type } = drop;
            let link = "/" + type;
            // let DropLink = props => <Link to={link} {...props} />;
            return (
              <BottomNavigationAction
                key={"drop" + i}
                label={type.toLowerCase()}
                value={type}
                icon={<IconHOC type={type} />}
                component={Link}
                to={link}
                className={"style-" + type}
              />
            );
          })
        : "";
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

    // const renderNavBtnsBtm =
    //   drops && drops.length //<StyledDropList drops={dropBtms} />
    //     ? dropBtms.map((drop, i) => {
    //         const { type } = drop;
    //         let link = "/" + type;
    //         // let DropLink = props => <Link to={link} {...props} />;
    //         return (
    //           <BottomNavigationAction
    //             key={"drop" + i}
    //             label={type.toLowerCase()}
    //             value={type}
    //             icon={<IconHOC type={type} />}
    //             component={Link}
    //             to={link}
    //             className={"style-" + type}
    //           />
    //         );
    //       })
    //     : "";

    // dropBtms.map((drop, i) => {
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

    return (
      <>
        <BottomNavigation
          showLabels
          value={value}
          onChange={this.handleChange}
          className={classes}
          style={{
            // backgroundColor: "rgba(0,0,0,0.1)",
            // backgroundColor: "rgba(251, 54, 74, 0.8)",
            // background: "linear-gradient(360deg, #1C1C1C 10%, #494949 360%)",
            width: this.props.width,
            height: this.props.height
          }}
        >
          {renderNavBtns}
        </BottomNavigation>
      </>
    );
  }
}

// <BottomNavigation
//   value={value}
//   onChange={this.handleChange}
//   className={classes.root}
// >
//   {renderNavBtnsBtm}
// </BottomNavigation>

// export default withDrops(withStyles(styles)(LabelBottomNavigation));
export default withDrops(LabelBottomNavigation);
