import React from "react";
import Typography from "../../atoms/Typography";
import IconComp from "../IconsComp";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

const MainDiv = styled(Box)`
  display: flex;
  margin-top: 20px;
  width: 285px;
  height: 48px;
  gap: 0px;
  justify-content: space-between;
  opacity: 0px;
`;
const SubDiv = styled(Box)`
  display: flex;
  align-items: flex-end;
`;
const IconTypography: React.FC = () => {
  return (
    <MainDiv>
      <Box>
        <Typography variant="caption">Commute routes available :</Typography>
        <IconComp />
      </Box>
      <SubDiv>
        <Typography variant="caption">1 hour ago</Typography>
      </SubDiv>
    </MainDiv>
  );
};
export default IconTypography;
