import React from "react";
import { FormGroup, TextField, IconButton } from "@mui/material";
import useViewModel from "./useViewModel";
import errorIcon from "src/assets/images/icon-error.svg";
import "src/assets/styles/form.css";
import { useStyles } from "./useStyles";
import CustomButton from "../buttons";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const CustomForm = ({ dataIn }) => {
  const {
    handleInputChange,
    handleSubmit,
    formData,
    showPassword,
    handlePassIcon,
    hasError,
    errors,
    handleClearErrors,
  } = useViewModel(dataIn);
  const passwordIcon = (name) => {
    const passwordValue = formData.find(
      (field) => field.name === "Password"
    ).value;

    if (name === "password" && passwordValue.length > 0) {
      return (
        <IconButton
          aria-label="toggle password visibility"
          onClick={handlePassIcon}
          edge="end"
        >
          {showPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      );
    } else return;
  };
  const styles = useStyles();

  return (
    <>
      <FormGroup>
        {dataIn?.map((form) => {
          return (
            <TextField
              id={`form-${form.modifier}`}
              className="form-textfield"
              label={form.name}
              margin="normal"
              name={form.modifier}
              error={hasError(errors?.[form.modifier])}
              helperText={errors[form.modifier]}
              sx={styles.textFieldStyle}
              type={
                form.modifier === "password"
                  ? showPassword
                    ? "text"
                    : "password"
                  : "text"
              }
              InputProps={{
                style: styles.inputStyle,
                endAdornment: hasError(errors?.[form.modifier]) ? (
                  <img alt="error" src={errorIcon} />
                ) : (
                  passwordIcon(form.modifier)
                ),
              }}
              onClick={handleClearErrors}
              onChange={(e) => handleInputChange(form.modifier, e.target.value)}
            />
          );
        })}
      </FormGroup>
      <CustomButton
        title={<p>CLAIM YOUR FREE TRIAL</p>}
        id={"form-button"}
        btnFunction={() => handleSubmit()}
        style={styles.buttonStyle}
      />
    </>
  );
};

export default CustomForm;
