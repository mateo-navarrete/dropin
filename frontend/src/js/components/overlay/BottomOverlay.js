import React from 'react';

export const BottomOverlay = props => {
  return (
    <div
      className="bottom-overlay"
      style={{ bottom: props.visible ? 0 : -+`${props.height}` }}
    >
      BottomOverlay
      <button
        className="stepper-modal-close-button"
        onClick={props.closeStepperModal}
      >
        Close
      </button>
    </div>
  );
};
