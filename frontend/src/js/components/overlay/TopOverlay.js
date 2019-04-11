import React from 'react';

export const TopOverlay = props => {
  // console.log(props.visible, -+`${props.height}`);
  return (
    <div style={{ position: 'relative' }}>
      <div
        className="top-overlay"
        style={{ top: props.visible ? 0 : -+`${props.height}` }}
        // style={{
        // left: props.visible ? 0 : -+`${props.width}`,
        // top: props.visible ? 0 : -+`${props.height}`,
        // opacity: props.visible ? 1 : 0,
        // }}
      >
        TopOverlay
        <button
          className="stepper-modal-close-button"
          onClick={props.closeStepperModal}
        >
          Close
        </button>
      </div>
    </div>
  );
};
