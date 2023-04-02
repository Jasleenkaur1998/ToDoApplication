import { Button } from "@mui/material";
import React from "react";

export default function CustomButton({ color, title, variant, styleConfig, handleClick }) {
  return (
    <Button onClick={handleClick} color={color} variant={variant} style={styleConfig}>
      {title}
    </Button>
  );
}
