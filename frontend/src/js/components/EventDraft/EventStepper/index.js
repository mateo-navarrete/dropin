import React, { Component } from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
// import Typography from '@material-ui/core/Typography';
import { EventStepperControls } from '../EventStepperControls';
import { EventNameForm } from '../forms';
import { EventCaptionForm } from '../forms';
import { EventSettingsForm } from '../forms';

const getSteps = () => ['', '', ''];

class WrappedComponent extends Component {
  state = {
    activeStep: 0,
    event_name: '',
    caption: '',
    duration: 1,
    display_user: 1,
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
      event_name: '',
      caption: '',
      duration: 1,
      display_user: 'true',
    });
  };

  handleCreateEvent = e => {
    e.preventDefault();
    const {
      name,
      coords: { latitude, longitude },
    } = this.props;
    const { event_name, caption, display_user, duration } = this.state;
    let displayUser = ['false', 'true'];
    let eventDetails = {
      user_name: name,
      latitude: latitude,
      longitude: longitude,
      event_name: event_name,
      caption: caption,
      display_user: displayUser[+display_user],
      duration: duration,
    };
    // console.log('createEventDetails', eventDetails);
    this.props.createEvent(eventDetails);
    this.handleReset();
    this.props.handleClose();
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
    const renderEventSettingsForm =
      activeStep === 2 ? (
        <EventSettingsForm
          classes={classes}
          handleChange={this.handleChange}
          display_user={this.state.display_user}
          duration={this.state.duration}
        />
      ) : (
        ''
      );
    console.log(classes.root);
    return (
      <div>
        <Stepper
          activeStep={activeStep}
          alternativeLabel
          className={classes.root}
        >
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {renderEventNameForm}
          {renderEventCaptionForm}
          {renderEventSettingsForm}
          <EventStepperControls
            {...this.state}
            classes={classes}
            handleBack={this.handleBack}
            handleNext={this.handleNext}
            handleReset={this.handleReset}
            handleCreateEvent={this.handleCreateEvent}
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
