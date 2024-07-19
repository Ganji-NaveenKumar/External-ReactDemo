import React from "react";
import { Typography as MuiTypography } from "@mui/material";

interface TypographyProps {
  children: React.ReactNode;
  variant:'h1'|'h3'|'body1'
}
const Typography: React.FC<TypographyProps> = ({ children,variant }) => {
  return (
    <MuiTypography variant={variant}>{children}</MuiTypography>
  )
};
export default Typography;
