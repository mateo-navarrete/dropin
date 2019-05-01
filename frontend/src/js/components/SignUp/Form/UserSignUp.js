import React, { Fragment as F } from 'react';
import { Button, FormControl, Input, InputLabel } from '../../material';

export const UserSignUp = props => {
  const textFields = [
    { id: 'email', label: 'Email' },
    //   { id: "profile_photo", label: "Profile Photo URL" },
  ];

  const renderTextFields = textFields.map(field => {
    const { id, label } = field;
    return (
      <FormControl margin="normal" required={id === 'email'} fullWidth key={id}>
        <InputLabel htmlFor={id}>{label}</InputLabel>
        <Input
          id={id}
          name={id}
          value={props[id]}
          onChange={props.handleChange}
          type="text"
        />
      </FormControl>
    );
  });

  return (
    <F>
      {renderTextFields}

      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={props.classes.submit}
      >
        Sign up
      </Button>
    </F>
  );
};
