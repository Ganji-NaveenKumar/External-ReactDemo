import React from "react";
import Cardcomp from "../../molecules/TypographyBody";
import IconTypography from "../../molecules/IconTypography";
import IconHeader from "../../molecules/IconHeader";
import styled from "@emotion/styled";
const MainCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: auto;
  height: auto;
  gap: 20px;
  padding: 20px;
  position: fixed;
  top: 40%;
  left: 40%;
  border: 1px solid red;
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
