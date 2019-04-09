import React from "react";
import { withPinModal } from "../../../containers";
import "../../../../styles/pinModal.css";

const PinsModal = props => {
  console.log("@pinsModal", props);
  return <>
  {props.visible ? <div className="pin-modal">pin Modal</div> : ""}
  <br />
  {props.visible ? <div className="pin-modal">Lorem Ipsum Something something</div> : ""}
  {props.visible ? <div className="pin-modal"><button onClick={props.closePinModal}>Close</button></div> : ""}
  </>;
};

// <>
//     <h1>UserCoords:</h1>
//     <p>latitude: {props.latitude}</p>
//     <p>latitude: {props.longitude}</p>
//   </>

export const PinModal = withPinModal(PinsModal);
