import React from "react";
import {
  UserMustBe18,
  UserSignUpWrapper,
  UserSignIn,
  UserStatusOptions
} from "..";

export const UserStatus = props => {
  // console.log('@@@', props)
  return (
    <>
      {props.signup ? (
        props.isUnder18 ? (
          <UserMustBe18
            height={props.height}
            isUnder18={props.isUnder18}
            hideMustBe18={props.hideMustBe18}
          />
        ) : (
          <UserSignUpWrapper {...props} />
        )
      ) : props.signin ? (
        <UserSignIn {...props} />
      ) : (
        <UserStatusOptions {...props} />
      )}
    </>
  );
};
