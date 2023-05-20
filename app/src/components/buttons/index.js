/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Button } from "@mui/material";

const CustomButton = ({ title, btnFunction, style }) => {
  return (
    <Button onClick={() => btnFunction()} variant="contained" sx={style}>
      {title}
    </Button>
  );
};

export default CustomButton;
