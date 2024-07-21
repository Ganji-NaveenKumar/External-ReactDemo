import React from "react";
import { Typography as MuiTypography } from "@mui/material";

interface TypographyProps {
  children: React.ReactNode;
  variant:'caption'|'subtitle1'|'subtitle2'
}
const Typography: React.FC<TypographyProps> = ({ children,variant}) => {
  return (
    <MuiTypography variant={variant}>{children}</MuiTypography>
  )
};
export default Typography;
