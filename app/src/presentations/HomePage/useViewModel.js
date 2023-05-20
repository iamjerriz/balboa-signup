/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

const useViewModel = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    firstNameError: false,
    lastNameError: false,
    emailError: false,
    emailInvalid: false,
    passwordError: false,
  });

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

  const handleSubmit = (e) => {
    if (validateForm()) {
      console.log("Form submitted:", formData);
    } else {
      console.log("Form contains errors. Please fix them.");
    }
  };

  return {
    validateForm,

    errors,
    formData,
  };
};

export default useViewModel;
