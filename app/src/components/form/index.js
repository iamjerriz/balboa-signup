// This is just an example

import React from "react";
import { FormGroup, TextField } from "@mui/material";
import useViewModel from "./useViewModel";
import CustomButton from "../buttons";

const SignupForm = () => {
  const model = useViewModel();
  const buttonStyle1 = {
    width: "100%",
    background: "#37cc8a",
    margin: "20px 0",
    padding: "15px 0",
  };

  return (
    <>
      <FormGroup>
        <TextField
          id="outlined-basic"
          label="First Name"
          variant="outlined"
          margin="normal"
          name="firstName"
          onClick={model?.handleClearErrors}
          error={model?.errors.firstNameError}
          helperText={
            model?.errors.firstNameError ? "First name cannot be empty." : ""
          }
          onChange={model?.handleInputChange}
        />

        <TextField
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
          margin="normal"
          name="lastName"
          onClick={model?.handleClearErrors}
          error={model?.errors.lastNameError}
          helperText={
            model?.errors.firstNameError ? "Last name cannot be empty." : ""
          }
          onChange={model?.handleInputChange}
        />
        <TextField
          id="outlined-basic"
          label="Email Address"
          variant="outlined"
          margin="normal"
          name="email"
          onClick={model?.handleClearErrors}
          error={model?.errors.emailError}
          helperText={model?.errors.emailError ? "Email cannot be empty." : ""}
          onChange={model?.handleInputChange}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          margin="normal"
          name="password"
          onClick={model?.handleClearErrors}
          error={model?.errors.passwordError}
          helperText={
            model?.errors.passwordError ? "Password cannot be empty." : ""
          }
          onChange={model?.handleInputChange}
        />
      </FormGroup>
      <CustomButton
        title={"CLAIM YOUR FREE TRIAL"}
        btnFunction={() => model?.handleSubmit()}
        style={buttonStyle1}
      />
    </>
  );
};

export default SignupForm;
