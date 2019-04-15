import React from 'react';
import {
  withAreaSizes,
  // withStepperModal,
  withBottomOverlay
} from '../../containers';
// import StyledBottomDrawer from '../styled/StyledBottomDrawer';
// import { StyledDropPinStepper } from '../';
import {
  // SigninForm, SignupForm,
  SigninPage
} from '../droppers';
import Button from '@material-ui/core/Button';

const Overlay = props => {
  console.log('@@@overlay', props, props.height, props.visible);

  // let myComp = (
  //   <div>
  //     {
  //       <div
  //         className="overlay-area"
  //         style={{
  //           // left: props.visible ? 0 : -+`${props.width}`,
  //           bottom: props.visible ? 0 : -+`${props.height}`,
  //           opacity: props.visible ? 1 : 0,
  //         }}
  //       >
  //         {props.isLoggedIn ? (
  //           <div className="stepper-modal">
  //             <StyledDropPinStepper />
  //             <button
  //               className="stepper-modal-close-button"
  //               onClick={props.closeStepperModal}
  //             >
  //               Close
  //             </button>
  //           </div>
  //         ) : (
  //           <div className="stepper-modal">
  //             <SigninPage />
  //             <button
  //               className="stepper-modal-close-button"
  //               onClick={props.closeStepperModal}
  //             >
  //               Close
  //             </button>
  //           </div>
  //         )}
  //       </div>
  //     }
  //   </div>
  // );
  return (
    <div style={{ position: 'relative' }}>
      <div
        className="bottom-overlay"
        style={{
          bottom: props.bottomOverlayVisible ? 0 : -+`${props.height}`,
          // display: props.visible ? 'block' : 'none',
        }}
      >
        login test
        <SigninPage />
        <br />
        <Button
          variant="outlined"
          color="secondary"
          onClick={props.closeBottomOverlay}
        >
          Close
        </Button>
      </div>
    </div>
  );
};
// className="stepper-modal-close-button"

// <StyledEventStepper closeBottomOverlay={props.closeBottomOverlay} />

export const OverlayArea =
  // withAreaSizes(withStepperModal(Overlay));
  withAreaSizes(withBottomOverlay(Overlay));

// <StyledBottomDrawer />

// <div
//   className="overlay-area"
//   style={{
//     // left: props.visible ? 0 : -+`${props.width}`,
//     bottom: props.visible ? 0 : -+`${props.height}`,
//     opacity: props.visible ? 1 : 0,
//   }}
// >
//   {props.isLoggedIn ? (
//     <div className="stepper-modal">
//       <StyledDropPinStepper />
//       <button
//         className="stepper-modal-close-button"
//         onClick={props.closeStepperModal}
//       >
//         Close
//       </button>
//     </div>
//   ) : (
//     <div className="stepper-modal">
//       LOGIN COMPONENT GOES HERE
//       <button
//         className="stepper-modal-close-button"
//         onClick={props.closeStepperModal}
//       >
//         Close
//       </button>
//     </div>
//   )}
// </div>
