import React from "react";
import Typography from "../../atoms/Typography";
import IconComp from "../IconsComp";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

const MainDiv = styled.div`
  display: flex;
  margin-top:20px;
`;
const SubDiv=styled.div`
display:flex;
align-items:flex-end;
`;
const IconTypography: React.FC = () => {
  return (
    <MainDiv>
      <Box>
        <Typography variant="body1">Commute routes available :</Typography>
        <IconComp />
      </Box>
      <SubDiv>
        <Typography variant="body1">1 hour ago</Typography>
      </SubDiv>
    </MainDiv>
  );
};
export default IconTypography;
