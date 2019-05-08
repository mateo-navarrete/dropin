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
        <InputLabel htmlFor="display_user">Privacy</InputLabel>
        <Select
          native
          value={display_user === 'true' ? 'true' : 'false'}
          onChange={handleChange}
          input={<Input id="display_user" />}
        >
          <option value={'true'}>Make Public</option>
          <option value={'false'}>Make Private</option>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="duration">Duration</InputLabel>
        <Select
          native
          value={duration}
          onChange={handleChange}
          input={<Input id="duration" />}
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
