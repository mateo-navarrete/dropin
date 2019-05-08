//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { FormControl, InputLabel, Input } from '../../material';

export const EventCaptionForm = ({ classes, handleChange, caption }) => {
  return (
    <form
      className={classes.form}
      onChange={handleChange}
      onSubmit={e => handleChange(e)}
    >
      <FormControl margin="normal" required fullWidth>
        <InputLabel htmlFor="caption">Event Caption</InputLabel>
        <Input
          id="caption"
          name="caption"
          autoComplete="off"
          value={caption}
          autoFocus
          required
        />
      </FormControl>
    </form>
  );
};
