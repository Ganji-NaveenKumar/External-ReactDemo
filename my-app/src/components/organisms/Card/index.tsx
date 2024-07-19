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
