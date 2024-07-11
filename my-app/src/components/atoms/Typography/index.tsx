import React from "react";
import { Typography } from "@mui/material";

interface TypographyProps {
  children: React.ReactNode;
}
const TypographyComp: React.FC<TypographyProps> = ({ children }) => {
  return <Typography>{children}</Typography>;
};
export default TypographyComp;
