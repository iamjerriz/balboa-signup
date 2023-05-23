import { useState } from "react";

const useViewModel = (form) => {
  //initial data
  const field = form.map((field) => {
    return field;
  });
  //Store Data
  const [formData, setFormData] = useState(field);
  //Store Errors
  const [errors, setErrors] = useState({});
  //Password State
  const [showPassword, setShowPassword] = useState(false);
  const handlePassIcon = () => setShowPassword((showPassword) => !showPassword);

  //Clear Errors
  const handleClearErrors = () => {
    setErrors({});
  };

  //Handle Input Change
  const handleInputChange = (modifier, newValue) => {
    setFormData((prevFormData) => {
      const updatedFormData = prevFormData.map((field) => {
        if (field.modifier === modifier) {
          return { ...field, value: newValue };
        }
        return field;
      });
      return updatedFormData;
    });
  };

  // Validate Data
  const validateForm = () => {
    formData.map((field) => {
      if (field.type === "string" && field.required) {
        if (field.value.length <= 0) {
          setErrors((s) => ({
            ...s,
            [field.modifier]: `${field.name} cannot be empty`,
          }));
        } else
          setErrors((s) => ({
            ...s,
            [field.modifier]: true,
          }));
      } else if (field.type === "email" && field.required) {
        const isEmailValid = !/\S+@\S+\.\S+/.test(field.value);
        const isEmailEmpty = field.value.length <= 0;
        if (isEmailEmpty)
          setErrors((s) => ({
            ...s,
            [field.modifier]: `${field.name} cannot be empty`,
          }));
        if (!isEmailEmpty && isEmailValid)
          setErrors((s) => ({
            ...s,
            [field.modifier]: "Looks like this is not an email",
          }));
        else if (!isEmailEmpty && !isEmailValid)
          setErrors((s) => ({
            ...s,
            [field.modifier]: true,
          }));
      } else if (!field.required) {
        setErrors((s) => ({ ...s, [field.modifier]: true }));
      }
      return console.log(errors);
    });
  };

  const hasError = (modifier) => {
    if (modifier?.length > 0 && modifier !== true) return true;
    else return false;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Form submitted:", formData);
    } else {
      console.log("Form contains errors. Please fix them.");
    }
  };

  return {
    handleInputChange,
    validateForm,
    handleClearErrors,
    handleSubmit,
    handlePassIcon,

    hasError,
    errors,
    showPassword,
    formData,
  };
};

export default useViewModel;
