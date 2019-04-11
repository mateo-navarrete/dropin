import React from 'react';
import { withScreenSize, withStepperModal } from '../../containers';
import StyledBottomDrawer from '../styled/StyledBottomDrawer';
import { StyledDropPinStepper } from '../';
import {SigninForm, SignupForm, SigninPage} from "../droppers"
const Overlay = props => {
  console.log('@@@', props, props.height);
  return (
    <div>
      {
        <div
          className="overlay-area"
          style={{
            // left: props.visible ? 0 : -+`${props.width}`,
            bottom: props.visible ? 0 : -+`${props.height}`,
            opacity: props.visible ? 1 : 0,
          }}
        >
          {props.isLoggedIn ? (
            <div className="stepper-modal">
              <StyledDropPinStepper />
              <button
                className="stepper-modal-close-button"
                onClick={props.closeStepperModal}
              >
                Close
              </button>
            </div>
          ) : (
            <div className="stepper-modal">
              <SigninPage />
              <button
                className="stepper-modal-close-button"
                onClick={props.closeStepperModal}
              >
                Close
              </button>
            </div>
          )}
        </div>
      }
    </div>
  );
};

export const OverlayArea = withScreenSize(withStepperModal(Overlay));

// <StyledBottomDrawer />
