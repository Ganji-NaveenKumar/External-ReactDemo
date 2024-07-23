import React from "react";
import Typography from "../../atoms/Typography";
import styled from "@emotion/styled";
import { ThemeProvider } from "@emotion/react";
import themes from "../../../themes";
import { Box } from "@mui/material";
const StyledTypography = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  width: 220px;
  height: 64px;
  gap: 4px;
  opacity: 0px;
`;
const TypographyBody: React.FC = () => {
  return (
    <ThemeProvider theme={themes}>
      <StyledTypography>
        <Typography variant="subtitle1">User Experience Designer </Typography>
        <Typography variant="caption">HP</Typography>
        <Typography variant="subtitle2">Hyderabad, Telangana, India</Typography>
      </StyledTypography>
    </ThemeProvider>
  );
};
export default TypographyBody;
