import React from "react";
import { withPinModal } from "../../../containers";
import "../../../../styles/pinModal.css";

const PinsModal = props => {
  console.log("@@@", props);
  return <>{props.visible ? <div className="pin-modal">pin Modal</div> : ""}</>;
};

// <>
//     <h1>UserCoords:</h1>
//     <p>latitude: {props.latitude}</p>
//     <p>latitude: {props.longitude}</p>
//   </>

export const PinModal = withPinModal(PinsModal);
