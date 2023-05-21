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
  const handleClearErrors = (name) => {
    if (name === "emailError") {
      setErrors((s) => ({ ...s, emailInvalid: false }));
    }
    setErrors((s) => ({ ...s, [name]: false }));
  };

  //Handle Input Change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Validate Data
  const validateForm = () => {
    const { firstName, lastName, email, password } = formData;
    const newErrors = {
      firstNameError: firstName.trim() === "",
      lastNameError: lastName.trim() === "",
      emailError: email.trim() === "",
      emailInvalid: !/\S+@\S+\.\S+/.test(email),
      passwordError: password.trim() === "",
    };

    const isValid = Object.values(newErrors).every((error) => !error);

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
