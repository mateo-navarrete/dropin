import React from 'react';
import { withScreenSize, withStepperModal } from '../../containers';
import StyledBottomDrawer from '../styled/StyledBottomDrawer';
import { StyledDropPinStepper } from '../';

import { BottomOverlay } from './BottomOverlay';
import { TopOverlay } from './TopOverlay';

const Overlay = props => {
  console.log('@@@', props, props.height, props.visible);
  return (
    <div>
      <TopOverlay {...props} />
      <BottomOverlay {...props} />
    </div>
  );
};

export const OverlayAreaCopy = withScreenSize(withStepperModal(Overlay));

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
