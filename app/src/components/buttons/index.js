/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Button } from "@mui/material";
import "../../assets/styles/customButton.css";

const CustomButton = ({ title, btnFunction, style }) => {
  return (
    <Button
      className="custom-button"
      onClick={() => btnFunction()}
      variant="contained"
      sx={style}
    >
      {title}
    </Button>
  );
};

export default CustomButton;
