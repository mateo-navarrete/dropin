import React from "react";
import { withStepperModal } from "../../../containers";
import { StyledDropPinStepper } from "../../";
import "../../../../styles/stepperModal.css";
import { withRouter } from "react-router";

const StepModal = ({ ...props }) => {
  console.log("@stepperModal", props);
  return (
    <>
      {props.visible ? (
        <div className="stepper-modal">
          stepper Modal
          <br />
          <StyledDropPinStepper />
          <br />
          <button
            className="stepper-modal-close-button"
            onClick={props.closeStepperModal}
          >
            Close
          </button>
        </div>
      ) : (
        ""
      )}
      <br />
    </>
  );
};
// {"event_id is:" + event_id}

// <>
//     <h1>UserCoords:</h1>
//     <p>latitude: {props.latitude}</p>
//     <p>latitude: {props.longitude}</p>
//   </>

export const StepperModal = withRouter(withStepperModal(StepModal));
