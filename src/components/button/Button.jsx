import { Button } from "@mui/material";
import React from "react";

export default function CustomButton({ color, title, variant, styleConfig, handleClick }) //This is the name of property
{
  return (
    <Button onClick={handleClick} color={color} variant={variant} style={styleConfig}>
      {title}
    </Button>
  );
}
