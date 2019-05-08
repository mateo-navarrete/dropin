import React from 'react';
import Button from '@material-ui/core/Button';

export const EventStepperControls = ({
  activeStep,
  event_name,
  caption,
  classes,
  handleBack,
  handleNext,
  handleReset,
  steps,
  ...props,
}) => {
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
        disabled={activeStep === 0}
        onClick={handleReset}
        className={classes.backButton}
      >
        Reset
      </Button>
      <Button
        disabled={
          (activeStep === 0 && !event_name) || (activeStep === 1 && !caption)
        }
        variant="contained"
        color="primary"
        onClick={activeStep === steps.length - 1 ? handleReset : handleNext}
      >
        {activeStep === steps.length - 1 ? 'Drop Pin' : 'Next'}
      </Button>
    </div>
  );
};
