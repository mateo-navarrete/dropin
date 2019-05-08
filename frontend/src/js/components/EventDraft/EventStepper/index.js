import React, { Component } from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
// import Typography from '@material-ui/core/Typography';
import { EventStepperControls } from '../EventStepperControls';
import { EventNameForm } from '../forms';
import { EventCaptionForm } from '../forms';

const getSteps = () => ['', '', ''];

class WrappedComponent extends Component {
  state = {
    activeStep: 0,
    event_name: '',
    caption: '',
    // checked:
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;
    const renderEventNameForm =
      activeStep === 0 ? (
        <EventNameForm
          classes={classes}
          handleChange={this.handleChange}
          event_name={this.state.event_name}
        />
      ) : (
        ''
      );
    const renderEventCaptionForm =
      activeStep === 1 ? (
        <EventCaptionForm
          classes={classes}
          handleChange={this.handleChange}
          caption={this.state.caption}
        />
      ) : (
        ''
      );
    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {renderEventNameForm}
          {renderEventCaptionForm}
          <EventStepperControls
            {...this.state}
            classes={classes}
            handleBack={this.handleBack}
            handleNext={this.handleNext}
            handleReset={this.handleReset}
            steps={steps}
          />
        </div>
      </div>
    );
  }
}

// <Typography className={classes.instructions}>
//   {renderEventNameForm}
//   {renderEventCaptionForm}
// </Typography>

export const EventStepper = WrappedComponent;
