// This is just an example

import React from "react";
import { FormGroup, TextField, InputAdornment } from "@mui/material";
import useViewModel from "./useViewModel";
import CustomButton from "../buttons";
import errorIcon from "../../assets/images/icon-error.svg";
import "../../assets/styles/form.css";

const SignupForm = () => {
  const model = useViewModel();

  const buttonStyle1 = {
    width: "100%",
    background: "#38CC8C",
    margin: "20px 0",
    padding: "15px 0",
    "&:hover": {
      background: "#38CC8C",
    },
  };

  return (
    <>
      <FormGroup>
        <TextField
          id="outlined-basic"
          className="form-textfield"
          label={model?.errors.firstNameError ? "" : "First Name"}
          variant="outlined"
          margin="normal"
          name="firstName"
          onClick={model?.handleClearErrors}
          error={model?.errors.firstNameError}
          helperText={
            model?.errors.firstNameError ? "First name cannot be empty." : ""
          }
          onChange={model?.handleInputChange}
          InputProps={{
            style: {
              fontSize: "16px",
              fontFamily: "poppins-regular",
            },
            endAdornment: (
              <InputAdornment position="start">
                {model?.errors.firstNameError && (
                  <img alt="error" src={errorIcon} />
                )}
              </InputAdornment>
            ),
          }}
        />

        <TextField
          id="outlined-basic"
          label={model?.errors.lastNameError ? "" : "Last Name"}
          variant="outlined"
          margin="normal"
          name="lastName"
          onClick={model?.handleClearErrors}
          error={model?.errors.lastNameError}
          helperText={
            model?.errors.lastNameError ? "Last name cannot be empty." : ""
          }
          onChange={model?.handleInputChange}
          InputProps={{
            style: {
              fontSize: "16px",
              fontFamily: "poppins-regular",
            },
            endAdornment: (
              <InputAdornment position="start">
                {model?.errors.emailError && (
                  <img alt="error" src={errorIcon} />
                )}
              </InputAdornment>
            ),
          }}
        />
        <TextField
          id="outlined-basic"
          label={
            model?.errors.emailError || model?.errors.emailInvalid
              ? ""
              : "Email Address"
          }
          variant="outlined"
          margin="normal"
          name="email"
          onClick={model?.handleClearErrors}
          error={model?.errors.emailError || model?.errors.emailInvalid}
          helperText={
            model?.errors.emailError
              ? "Email cannot be empty."
              : model?.errors.emailInvalid
              ? "Looks like this is not an email"
              : ""
          }
          onChange={model?.handleInputChange}
          InputProps={{
            style: {
              fontSize: "16px",
              fontFamily: "poppins-regular",
            },
            endAdornment: (
              <InputAdornment position="start">
                {model?.errors.emailError && (
                  <img alt="error" src={errorIcon} />
                )}
              </InputAdornment>
            ),
          }}
        />
        <TextField
          id="outlined-basic"
          label={model?.errors.passwordError ? "" : "Password"}
          variant="outlined"
          margin="normal"
          name="password"
          onClick={model?.handleClearErrors}
          error={model?.errors.passwordError}
          helperText={
            model?.errors.passwordError ? "Password cannot be empty." : ""
          }
          onChange={model?.handleInputChange}
          InputProps={{
            style: {
              fontSize: "16px",
              fontFamily: "poppins-regular",
            },
            endAdornment: (
              <InputAdornment position="start">
                {model?.errors.passwordError && (
                  <img alt="error" src={errorIcon} />
                )}
              </InputAdornment>
            ),
          }}
        />
      </FormGroup>
      <CustomButton
        title={<p>CLAIM YOUR FREE TRIAL</p>}
        btnFunction={() => model?.handleSubmit()}
        style={buttonStyle1}
      />
    </>
  );
};

export default SignupForm;
