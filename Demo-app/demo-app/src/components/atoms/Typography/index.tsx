import React from "react";
import { Typography as MuiTypography } from "@mui/material";
interface PropsTypography {
  children: React.ReactNode;
  variant: "body1" | "caption" | "h5" | "subtitle1";
}
const Typography: React.FC<PropsTypography> = ({ children, variant }) => {
  return <MuiTypography variant={variant}>{children}</MuiTypography>;
};
export default Typography;
