import React from "react";
import Typography from "../../atoms/Typography";
import styled from "@emotion/styled";
const StyledTypography = styled.div`
  text-align: start;
`;
const TypographyBody: React.FC = () => {
  return (
    <StyledTypography>
      <Typography>User Experience Designer</Typography>
      <Typography>HP</Typography>
      <Typography>Hyderabad, Telangana, India</Typography>
    </StyledTypography>
  );
};
export default TypographyBody;
