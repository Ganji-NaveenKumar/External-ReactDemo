import React from "react";
import Typography from "../../atoms/Typography";
import styled from "@emotion/styled";
import { ThemeProvider } from "@emotion/react";
import themes from "../../../themes";
const StyledTypography = styled.div`
  text-align: start;
  margin-top:30px;
`;
const TypographyBody: React.FC = () => {
  return (
    <ThemeProvider theme={themes}>
    <StyledTypography>
      <Typography variant="body1">User Experience Designer </Typography>
      <Typography variant="body2">HP</Typography>
      <Typography variant="subtitle1">Hyderabad, Telangana, India</Typography>
    </StyledTypography>
    </ThemeProvider>
  );
};
export default TypographyBody;
