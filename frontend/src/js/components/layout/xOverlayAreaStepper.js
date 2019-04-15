import React from 'react';
import {
  withAreaSizes,
  // withStepperModal,
  withBottomOverlay,
  withTopOverlay
} from '../../containers';
// import StyledBottomDrawer from '../styled/StyledBottomDrawer';
// import { StyledDropPinStepper } from '../';
import { BottomOverlayArea } from './BottomOverlayArea';
import { TopOverlayArea } from './TopOverlayArea';

const Overlay = props => {
  console.log('@@@', props);
  return (
    <div>
      <TopOverlayArea {...props} />
      <BottomOverlayArea {...props} />
    </div>
  );
};

export const OverlayAreaCopy = withAreaSizes(
  withTopOverlay(
    withBottomOverlay(
      // withStepperModal(
      Overlay
    )
  )
  // )
);

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
