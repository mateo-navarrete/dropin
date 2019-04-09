import React from "react";
import { withPinModal } from "../../../containers";
import "../../../../styles/pinModal.css";
import { withRouter } from "react-router";

const PinsModal = ({ event_id, ...props }) => {
  console.log("@pinsModal", event_id, props);
  return (
    <>
      {props.visible ? (
        <div className="pin-modal">
          pin Modal
          {"event_id is:" + event_id}
          <button
            className="pin-modal-close-button"
            onClick={props.closePinModal}
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

// <>
//     <h1>UserCoords:</h1>
//     <p>latitude: {props.latitude}</p>
//     <p>latitude: {props.longitude}</p>
//   </>

export const PinModal = withRouter(withPinModal(PinsModal));
