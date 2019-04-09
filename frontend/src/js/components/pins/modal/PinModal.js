import React from "react";
import { withPinModal } from "../../../containers";
import "../../../../styles/pinModal.css";
import { withRouter } from "react-router";

const PinsModal = ({ event_id, coords, ...props }) => {
  // console.log("@pinsModal", coords);
  let pinInfo;
  if (coords) {
    pinInfo = coords.map(pin => {
      if (pin.id === event_id)
        return (
          <div className="pin-modal-info" key={pin.id}>
            <h1>{pin.event_name}</h1>
            <p>Desription: {pin.description}</p>
            <p>Location: {pin.latitude}, {pin.longitude}</p>
          </div>
        );
    });
  } else {
    return null;
  }

  return (
    <>
      {props.visible ? (
        <div className="pin-modal">
        <div className="pin-modal-close-button-container">
          <button
            className="pin-modal-close-button"
            onClick={props.closePinModal}
          >
            Close
          </button>
          </div>
          {pinInfo}
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
