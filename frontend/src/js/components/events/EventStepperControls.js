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
  } = props;
  const steps = getSteps();
  console.log('CONFIG', config);

  return (
    <div>
      <Button
        disabled={activeStep === 0}
        onClick={handleBack}
        className={classes.backButton}
      >
        Back
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
