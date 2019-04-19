import React from 'react';
import { Button } from '..';

const getSteps = () => ['', '', '', '', '', ''];

export const EventStepperControls = props => {
  const {
    config,
    classes,
    activeStep,
    handleBack,
    handleNext,
    createEvent,
    handleReset,
  } = props;
  const steps = getSteps();
  // console.log('CONFIG', config);

  return (
    <div className="flex center">
      <Button
        disabled={activeStep === 0}
        onClick={handleBack}
        className={classes.backButton}
      >
        Back
      </Button>
      <Button
        color="secondary"
        disabled={activeStep === 0}
        onClick={handleReset}
      >
        Reset
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={
          activeStep === steps.length - 1
            ? () => createEvent(config)
            : handleNext
        }
      >
        {activeStep === steps.length - 1 ? 'DROP PIN' : 'Next'}
      </Button>
    </div>
  );
};
