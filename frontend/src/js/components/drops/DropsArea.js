import React, { Component } from 'react';
// import { withStyles } from "@material-ui/core/styles";
// import BottomNavigation from "@material-ui/core/BottomNavigation";
// import { DropBtnList } from '.';
import { StyledDropArea } from '..';

export const DropsArea = props => {
  return (
    <div className="flex center">
      <div className="">
        <StyledDropArea />
      </div>
    </div>
  );
};

// const styles = {
//   root: {
//     width: 500
//   }
// };
//
// // export const DropBtnArea = props => {
// class StyledDropBtnArea extends Component {
//   state = {
//     value: "family"
//   };
//
//   handleChange = (e, value) => {
//     console.log("e");
//     this.setState({ value });
//   };
//
//   render() {
//     const { classes } = this.props;
//     const { value } = this.state;
//     return (
//       <>
//         <BottomNavigation
//           value={value}
//           onChange={this.handleChange}
//           className={classes.root}
//         >
//           <DropBtnList />
//         </BottomNavigation>
//       </>
//     );
//   }
// }
// // <StyledDropArea />
//
// export default withStyles(styles)(StyledDropBtnArea);
