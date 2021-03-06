//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { FormControl, InputLabel, Select, Input } from '../../material';

export const EventSettingsForm = ({
  classes,
  handleChange,
  display_user,
  duration,
}) => {
  return (
    <form className={classes.container}>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="display_user" className={classes.cssLabel}>
          Privacy
        </InputLabel>
        <Select
          native
          value={display_user}
          onChange={e => handleChange(e)}
          input={
            <Input
              name="display_user"
              id="display_user"
              className={classes.cssUnderline}
            />
          }
        >
          <option value={0}>Make Private</option>
          <option value={1}>Make Public</option>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="duration" className={classes.cssLabel}>
          Duration
        </InputLabel>
        <Select
          native
          value={duration}
          onChange={handleChange}
          input={
            <Input
              name="duration"
              id="duration"
              className={classes.cssUnderline}
            />
          }
        >
          <option value={1}>15 minutes</option>
          <option value={2}>30 minutes</option>
          <option value={3}>1 hour</option>
          <option value={4}>2 hours</option>
        </Select>
      </FormControl>
    </form>
  );
};

// <form
//   className={classes.form}
//   onChange={handleChange}
//   onSubmit={e => handleChange(e)}
// >
//   <FormControl variant="outlined" className={classes.formControl}>
//     <InputLabel htmlFor="outlined-duration-native-simple">
//       Drop Duration
//     </InputLabel>
//     <Select
//       native
//       value={this.props.expiration_date}
//       onChange={e => this.props.setExpiration(e.target.value)}
//       input={
//         <OutlinedInput
//           name="Drop Duration"
//           labelWidth={labelWidth}
//           id="outlined-duration-native-simple"
//         />
//       }
//     >
//       <option value="" />
//       <option value={1}>15 minutes</option>
//       <option value={2}>30 minutes</option>
//       <option value={3}>1 hour</option>
//       <option value={4}>2 hour</option>
//     </Select>
//   </FormControl>
// </form>

// <FormControl margin="normal" required fullWidth>
//   <InputLabel htmlFor="display_user">Event Name</InputLabel>
//   <Input
//     id="display_user"
//     name="display_user"
//     autoComplete="off"
//     value={display_user}
//     autoFocus
//     required
//   />
// </FormControl>
