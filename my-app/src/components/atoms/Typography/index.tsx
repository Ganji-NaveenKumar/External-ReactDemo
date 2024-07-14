import React from "react";
import { Typography as MuiTypography } from "@mui/material";

interface TypographyProps {
  children: React.ReactNode;
}
const Typography: React.FC<TypographyProps> = ({ children }) => {
  return (
    <MuiTypography>{children}</MuiTypography>
  )
};
export default Typography;
