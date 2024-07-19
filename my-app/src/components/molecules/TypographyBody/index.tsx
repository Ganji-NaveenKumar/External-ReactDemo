import React from "react";
import Typography from "../../atoms/Typography";
import styled from "@emotion/styled";
const StyledTypography = styled.div`
  text-align: start;
`;
const TypographyBody: React.FC = () => {
  return (
    <StyledTypography>
      <Typography variant="body1">User Experience Designer</Typography>
      <Typography variant="body1">HP</Typography>
      <Typography variant="body1">Hyderabad, Telangana, India</Typography>
    </StyledTypography>
  );
};
export default TypographyBody;
