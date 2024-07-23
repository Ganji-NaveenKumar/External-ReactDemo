import React from "react";
import Cardcomp from "../../molecules/TypographyBody";
import IconTypography from "../../molecules/IconTypography";
import IconHeader from "../../molecules/IconHeader";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
const MainCard = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 285px;
  height: 239px;
  gap: 20px;
  padding: 20px;
  position: fixed;
  top: 30%;
  left: 30%;
  border: 1px solid red;
  border-radius:15px;
`;
const Card: React.FC = () => {
  return (
    <MainCard>
      <IconHeader />
      <Cardcomp />
      <IconTypography />
    </MainCard>
  );
};
export default Card;
