import React from "react";
import { Button } from "@mui/material";
import "src/assets/styles/customButton.css";

const CustomButton = ({ title, btnFunction, style, id }) => {
  return (
    <Button
      className="custom-button"
      id={id}
      onClick={() => btnFunction()}
      variant="contained"
      sx={style}
    >
      {title}
    </Button>
  );
};

export default CustomButton;
