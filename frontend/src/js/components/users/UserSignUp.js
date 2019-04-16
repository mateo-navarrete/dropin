import React from "react";
import { Button, FormControl, Input, InputLabel } from "..";

export const UserSignUp = props => {
  const textFields = [
    { id: "email", label: "Email" }
  //   { id: "profile_photo", label: "Profile Photo URL" },
  //   { id: "instagram_id", label: "Instagram ID" },
  //   { id: "linkedin_id", label: "LinkedIn ID" }
  ];

  const renderTextFields = textFields.map(field => {
    const { id, label } = field;
    return (
      <FormControl
        margin="normal"
        required={id === "email"}
        fullWidth
        key={id}
      >
        <InputLabel htmlFor={id}>{label}</InputLabel>
        <Input
          id={id}
          name={id}
          value={props[id]}
          onChange={props.handleChange}
          type={id === "birth_date" ? "date" : "text"}
          autoComplete={id === "birth_date" ? "current-birth_date" : "off"}
        />
      </FormControl>
    );
  });

  return (
    <>
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
    </>
  );
};
