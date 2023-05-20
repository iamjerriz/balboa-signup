/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

const useViewModel = () => {
  //Store Data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  //Store Errors
  const [errors, setErrors] = useState({
    firstNameError: false,
    lastNameError: false,
    emailError: false,
    emailInvalid: false,
    passwordError: false,
  });

  //Clear Errors
  const handleClearErrors = () => {
    const newErrors = {
      firstNameError: false,
      lastNameError: false,
      emailError: false,
      emailInvalid: false,
      passwordError: false,
    };
    setErrors(newErrors);
  };

  //Handle Input Change
  const handleInputChange = (e, a) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    console.log(formData);
  };

  // Validate Data
  const validateForm = () => {
    let isValid = true;
    const { firstName, lastName, email, password } = formData;
    const newErrors = {
      firstNameError: false,
      lastNameError: false,
      emailError: false,
      emailInvalid: false,
      passwordError: false,
    };

    if (firstName.trim() === "") {
      newErrors.firstNameError = true;
      isValid = false;
    }

    if (lastName.trim() === "") {
      newErrors.lastNameError = true;
      isValid = false;
    }

    if (email.trim() === "") {
      newErrors.emailError = true;
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.emailInvalid = true;
      isValid = false;
    }

    if (password.trim() === "") {
      newErrors.passwordError = true;
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = () => {
    console.log(formData);
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

    errors,
    formData,
  };
};

export default useViewModel;
