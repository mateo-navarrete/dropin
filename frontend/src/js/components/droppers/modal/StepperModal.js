import React from "react";
import { withStepperModal } from "../../../containers";
import "../../../../styles/pinModal.css";
import { withRouter } from "react-router";

const StepModal = ({ ...props }) => {
  console.log("@stepperModal", props);
  return (
    <>
      {props.visible ? (
        <div className="pin-modal">
          pin Modal
          <button
            className="pin-modal-close-button"
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
