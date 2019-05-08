//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { FormControl, InputLabel, Input } from '../../material';

export const EventNameForm = ({ classes, handleChange, event_name }) => {
  return (
    <form
      className={classes.form}
      onChange={handleChange}
      onSubmit={e => handleChange(e)}
    >
      <FormControl margin="normal" required fullWidth>
        <InputLabel htmlFor="event_name">Event Name</InputLabel>
        <Input
          id="event_name"
          name="event_name"
          autoComplete="off"
          value={event_name}
          autoFocus
          required
        />
      </FormControl>
    </form>
  );
};
