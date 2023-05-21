import React from "react";
import {
  FormGroup,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import useViewModel from "./useViewModel";
import errorIcon from "src/assets/images/icon-error.svg";
import "src/assets/styles/form.css";
import { useStyles } from "./useStyles";
import CustomButton from "../buttons";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const SignupForm = () => {
  const model = useViewModel();
  const styles = useStyles();

  const ErrorIcon = ({ name }) => {
    const values = model?.errors[name];
    if (!values) return null;

    return (
      <InputAdornment position="start" id={name}>
        <img alt="error" src={errorIcon} />
      </InputAdornment>
    );
  };

  return (
    <>
      <FormGroup>
        <TextField
          id="form-firstname"
          className="form-textfield"
          label={model?.errors.firstNameError ? "" : "First Name"}
          margin="normal"
          name="firstName"
          sx={styles.textFieldStyle}
          onClick={() => model?.handleClearErrors("firstNameError")}
          error={model?.errors.firstNameError}
          helperText={
            model?.errors.firstNameError ? "First name cannot be empty." : ""
          }
          onChange={model?.handleInputChange}
          InputProps={{
            style: styles.inputStyle,
            endAdornment: <ErrorIcon name="firstNameError" />,
          }}
        />

        <TextField
          id="form-lastname"
          label={model?.errors.lastNameError ? "" : "Last Name"}
          margin="normal"
          name="lastName"
          sx={styles.textFieldStyle}
          onClick={() => model?.handleClearErrors("lastNameError")}
          error={model?.errors.lastNameError}
          helperText={
            model?.errors.lastNameError ? "Last name cannot be empty." : ""
          }
          onChange={model?.handleInputChange}
          InputProps={{
            style: styles.inputStyle,
            endAdornment: <ErrorIcon name="lastNameError" />,
          }}
        />
        <TextField
          id="form-email"
          label={
            model?.errors.emailError || model?.errors.emailInvalid
              ? ""
              : "Email Address"
          }
          margin="normal"
          name="email"
          sx={styles.textFieldStyle}
          onClick={() => model?.handleClearErrors("emailError")}
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
            style: styles.inputStyle,
            endAdornment: <ErrorIcon name="emailError" />,
          }}
        />
        <TextField
          id="form-password"
          label={model?.errors.passwordError ? "" : "Password"}
          margin="normal"
          name="password"
          type={model?.showPassword ? "text" : "password"}
          sx={styles.textFieldStyle}
          onClick={() => model?.handleClearErrors("passwordError")}
          error={model?.errors.passwordError}
          helperText={
            model?.errors.passwordError ? "Password cannot be empty." : ""
          }
          onChange={model?.handleInputChange}
          InputProps={{
            style: styles.inputStyle,
            endAdornment: model?.errors.passwordError ? (
              <ErrorIcon name="passwordError" />
            ) : (
              model?.formData.password.length > 0 && (
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={model?.handleClickShowPassword}
                  edge="end"
                >
                  {model?.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              )
            ),
          }}
        />
      </FormGroup>
      <CustomButton
        title={<p>CLAIM YOUR FREE TRIAL</p>}
        id={"form-button"}
        btnFunction={() => model?.handleSubmit()}
        style={styles.buttonStyle}
      />
    </>
  );
};

export default SignupForm;
