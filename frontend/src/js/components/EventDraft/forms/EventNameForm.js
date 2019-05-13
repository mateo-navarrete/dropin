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
      <FormControl margin="normal" required fullWidth className={classes.form}>
        <InputLabel htmlFor="event_name" className={classes.cssLabel}>
          Event Name
        </InputLabel>
        <Input
          id="event_name"
          name="event_name"
          autoComplete="off"
          value={event_name}
          autoFocus
          required
          className={classes.cssUnderline}
        />
      </FormControl>
    </form>
  );
};
