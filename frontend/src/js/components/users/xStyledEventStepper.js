import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withEvents } from '../../containers';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import PartyIcon from '@material-ui/icons/Whatshot';
import PartyIconBorder from '@material-ui/icons/WhatshotOutlined';
import SportsIcon from '@material-ui/icons/Flag';
import SportsIconBorder from '@material-ui/icons/OutlinedFlag';
import Switch from '@material-ui/core/Switch';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Select from '@material-ui/core/Select';
// import NativeSelect from '@material-ui/core/NativeSelect';
import ReactDOM from 'react-dom';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      // width: 400,
      width: 'calc(100% - 50px)',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: `calc(100vh - ${theme.spacing.unit * 16}px)`,
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  root: {
    width: '90%',
  },
  backButton: {
    marginRight: theme.spacing.unit,
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
  icon: {
    color: theme.primary, //'red !important',
  },
  iconed: {
    color: 'rgba(251, 54, 74, 1) !important', //"green !important"
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

const getSteps = () => {
  return ['', '', '', '', '', ''];
};

const getStepContent = (obj, stepIndex) => {
  return obj[stepIndex];
  // return STEPobj[stepIndex];
};

class HorizontalLabelPositionBelowStepper extends Component {
  state = {
    activeStep: 0,
    event_name: '',
    description: '',
    family: true,
    party: false,
    sports: false,
    drop: 'family',
    checkedA: true,
    checkedB: true,
    labelWidth: 0,
  };
  // componentDidMount() {
  //   this.setState({
  //     labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth
  //   });
  //removed from step 3 InputLabel
  // ref={ref => {
  //   this.InputLabelRef = ref;
  // }}
  // }

  handleChangeCheckbox = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  handleChangeRadio = event => {
    this.setState({ drop: event.target.value });
  };

  handleChange = e => {
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
    const config = {
      category_id: this.props.category_id || 1,
      user_id: this.props.user_id || 1,
      latitude: this.props.latitude,
      longitude: this.props.longitude,
      display_user: this.props.display_user || false,
      event_name: this.state.event_name || 'my event',
      description: this.state.description || 'defualt description of my event',
      expiration_date: this.props.expiration_date || '2019-04-09 8:30:29.247613',
    };
    const { classes, closeBottomOverlay } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;
    const { family, party, sports, drop, labelWidth } = this.state;
    const error = [family, party, sports].filter(v => v).length !== 1;
    // const error = [family, party, sports].filter(v => v).length !== 2;
    const STEPobj = {
      0: (
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Type of Drop</FormLabel>
          <FormGroup>
            <RadioGroup
              aria-label="DropType"
              name="drops"
              className={classes.group}
              row
            >
              <FormControlLabel
                control={
                  <Radio
                    checked={+this.props.category_id === 1}
                    value={1}
                    onChange={e => this.props.setCategory(e.target.value)}
                    color="secondary"
                    name="drops"
                    aria-label="family"
                    icon={<FavoriteBorder fontSize="large" />}
                    checkedIcon={<Favorite fontSize="large" />}
                  />
                }
                label="FAMILY"
              />
              <FormControlLabel
                control={
                  <Radio
                    checked={+this.props.category_id === 2}
                    value={2}
                    onChange={e => this.props.setCategory(e.target.value)}
                    color="secondary"
                    name="drops"
                    aria-label="party"
                    icon={<PartyIconBorder fontSize="large" />}
                    checkedIcon={<PartyIcon fontSize="large" />}
                  />
                }
                label="PARTY"
              />
              <FormControlLabel
                control={
                  <Radio
                    checked={+this.props.category_id === 3}
                    value={3}
                    onChange={e => this.props.setCategory(e.target.value)}
                    color="secondary"
                    name="drops"
                    aria-label="sports"
                    icon={<SportsIconBorder fontSize="large" />}
                    checkedIcon={<SportsIcon fontSize="large" />}
                  />
                }
                label="SPORTS"
              />
            </RadioGroup>
          </FormGroup>
        </FormControl>

        // <div>
        //   drop_category <br />[ CANCEL ] [ NEXT ]
        //   <select onChange={e => this.props.setCategory(e.target.value)}>
        //     <option value={1}>Family</option>
        //     <option value={2}>Party</option>
        //     <option value={3}>Sports</option>
        //   </select>
        // </div>
      ),
      1: (
        <form className={classes.form} onChange={this.handleChange}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="event_name">Event Name</InputLabel>
            <Input
              id="event_name"
              name="event_name"
              autoComplete="off"
              value={this.state.event_name}
              autoFocus
              required
            />
          </FormControl>
        </form>

        // <div>
        //   event_name <br />[ BACK ] [ NEXT ]
        //   <form onChange={this.handleChange}>
        //     <input
        //       type="text"
        //       name="event_name"
        //       placeholder="event_name..."
        //       value={this.state.event_name}
        //       required
        //       onChange={this.handleChange}
        //     />
        //   </form>
        // </div>
      ),
      2: (
        <form className={classes.form} onChange={this.handleChange}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="description">Event Details</InputLabel>
            <Input
              id="description"
              name="description"
              autoComplete="off"
              value={this.state.description}
              autoFocus
              required
            />
          </FormControl>
        </form>

        // <div>
        //   description <br />[ BACK ] [ NEXT ]
        //   <form onChange={this.handleChange}>
        //     <input
        //       type="text"
        //       name="description"
        //       placeholder="description..."
        //       value={this.state.description}
        //       required
        //       onChange={this.handleChange}
        //     />
        //   </form>
        // </div>
      ),
      3: (
        // <FormControl variant="outlined" className={classes.formControl}>
        //   <InputLabel
        //     ref={ref => {
        //       this.InputLabelRef = ref;
        //     }}
        //
        //     htmlFor="outlined-duration-native-simple"
        //   >
        //     Drop Duration
        //   </InputLabel>
        //   <Select
        //     native
        //     value={this.props.expiration_date}
        //     onChange={e => this.props.setExpiration(e.target.value)}
        //     input={
        //       <OutlinedInput
        //         name="Drop Duration"
        //         labelWidth={labelWidth}
        //         id="outlined-duration-native-simple"
        //       />
        //     }
        //   >
        //     <option value="" />
        //     <option value={'2019-04-09 8:30:29.247613'}>15 minutes</option>
        //     <option value={'2019-04-09 8:45:29.247613'}>30 minutes</option>
        //     <option value={'2019-04-09 9:30:29.247613'}>1 hour</option>
        //     <option value={'2019-04-09 11:30:29.247613'}>3 hour</option>
        //   </Select>
        // </FormControl>

        // <div>
        //   expiration_date, expires in... <br />[ BACK ] [ NEXT ]
        //   <select onChange={e => this.props.setExpiration(e.target.value)}>
        //     <option value={'2019-04-09 8:30:29.247613'}>15 minutes</option>
        //     <option value={'2019-04-09 8:45:29.247613'}>30 minutes</option>
        //     <option value={'2019-04-09 9:30:29.247613'}>1 hour</option>
        //     <option value={'2019-04-09 11:30:29.247613'}>3 hour</option>
        //   </select>
        // </div>
        <div />
      ),
      4: (
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={this.props.display_user === 'true'}
                onChange={e => this.props.setPrivacy(e.target.value)}
                value={this.props.display_user === 'true' ? false : true}
              />
            }
            label="Make Public"
          />
        </FormGroup>
        // <div>
        //   display_user <br />[ BACK ] [ NEXT ]
        //   <select onChange={e => this.props.setPrivacy(e.target.value)}>
        //     <option value={false}>NO</option>
        //     <option value={true}>YES</option>
        //   </select>
        // </div>
      ),
      5: (
        <div>
          <br />
          {`drop type:  ${this.props.category_id}`}
          <br />
          {`event name: ${this.state.event_name}`}
          <br />
          {`drop details: ${this.state.description}`}
          <br />
          {`duration: ${this.props.expiration_date}`}
          <br />
          {`private: ${this.props.display_user}`}
          <br />
        </div>
      ),
    };
    // console.log('@styled With event', this.props);

    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <div className={classes.root}>
            <Button
              variant="outlined"
              color="secondary"
              onClick={closeBottomOverlay}
            >
              RETURN
            </Button>

            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map(label => (
                <Step key={label}>
                  <StepLabel
                    StepIconProps={{
                      classes: {
                        active: classes.icon,
                        completed: classes.iconed,
                      },
                    }}
                  >
                    {label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>

            <div>
              {this.state.activeStep === steps.length ? (
                <div>
                  <Typography className={classes.instructions}>
                    All steps completed
                  </Typography>
                  <Button onClick={this.handleReset}>Reset</Button>
                </div>
              ) : (
                <div>
                  <Typography component="h1" variant="h5">
                    Drop Details
                  </Typography>

                  {activeStep === 3 ? (
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                    >
                      <InputLabel htmlFor="outlined-duration-native-simple">
                        Drop Duration
                      </InputLabel>
                      <Select
                        native
                        value={this.props.expiration_date}
                        onChange={e => this.props.setExpiration(e.target.value)}
                        input={
                          <OutlinedInput
                            name="Drop Duration"
                            labelWidth={labelWidth}
                            id="outlined-duration-native-simple"
                          />
                        }
                      >
                        <option value="" />
                        <option value={'2019-04-09 8:30:29.247613'}>
                          15 minutes
                        </option>
                        <option value={'2019-04-09 8:45:29.247613'}>
                          30 minutes
                        </option>
                        <option value={'2019-04-09 9:30:29.247613'}>
                          1 hour
                        </option>
                        <option value={'2019-04-09 11:30:29.247613'}>
                          3 hour
                        </option>
                      </Select>
                    </FormControl>
                  ) : (
                    ''
                  )}

                  {getStepContent(STEPobj, activeStep)}
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      onClick={this.handleBack}
                      className={classes.backButton}
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={
                        activeStep === steps.length - 1
                          ? () => this.props.createEvent(config)
                          : this.handleNext
                      }
                    >
                      {activeStep === steps.length - 1 ? 'DROP PIN' : 'Next'}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Paper>
      </main>
    );
  }
}

// value={config.category_id}
// onChange={e => this.props.setCategory(e.target.value)}
//this.state.drop}
//onChange={this.handleChangeRadio}

// <Typography className={classes.instructions}>
//   {getStepContent(activeStep)}
// </Typography>

HorizontalLabelPositionBelowStepper.propTypes = {
  classes: PropTypes.object,
};

export default withEvents(
  withStyles(styles)(HorizontalLabelPositionBelowStepper)
);

// <FormGroup row>
//   <FormControlLabel
//     control={
//       <Switch
//         checked={this.state.checkedA}
//         onChange={this.handleChangeCheckbox("checkedA")}
//         value="checkedA"
//       />
//     }
//     label="Make Public"
//   />
//   <FormControlLabel
//     control={
//       <Switch
//         checked={this.state.checkedB}
//         onChange={this.handleChangeCheckbox("checkedB")}
//         value="checkedB"
//         color="primary"
//       />
//     }
//     label="Primary"
//   />
// </FormGroup>

// <FormGroup row>
//   <FormControlLabel
//     control={
//       <Checkbox
//         checked={family}
//         icon={<FavoriteBorder fontSize="large" />}
//         checkedIcon={<Favorite fontSize="large" />}
//         onChange={this.handleChangeCheckbox("family")}
//         value="family"
//       />
//     }
//     label="FAMILY"
//   />
//
//   <FormControlLabel
//     control={
//       <Checkbox
//         checked={party}
//         onChange={this.handleChangeCheckbox("party")}
//         icon={<PartyIconBorder fontSize="large" />}
//         checkedIcon={<PartyIcon fontSize="large" />}
//         value="party"
//       />
//     }
//     label="PARTY"
//   />
//   <FormControlLabel
//     control={
//       <Checkbox
//         checked={sports}
//         onChange={this.handleChangeCheckbox("sports")}
//         icon={<SportsIconBorder fontSize="large" />}
//         checkedIcon={<SportsIcon fontSize="large" />}
//         value="sports"
//       />
//     }
//     label="SPORTS"
//   />
// </FormGroup>
// <FormHelperText>Select One Drop Type Only</FormHelperText>
