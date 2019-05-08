//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { FormControl, InputLabel, Input } from '../../material';

export const EventSettingsForm = ({ classes, handleChange, display_user, duration }) => {
  return (
    <form
      className={classes.form}
      onChange={handleChange}
      onSubmit={e => handleChange(e)}
    >
      <FormControl margin="normal" required fullWidth>
        <InputLabel htmlFor="display_user">Event Name</InputLabel>
        <Input
          id="display_user"
          name="display_user"
          autoComplete="off"
          value={display_user}
          autoFocus
          required
        />
      </FormControl>
    </form>
  );
};
