import React from "react";
import styled from "@emotion/styled";
import CardComp from "../components/molecules/Card/index";
import { Stack } from "@mui/material";

const StyledDiv = styled.div`
  width: 285px;
  height: 239px;
  margin-top: 200px;
  margin-left: 600px;
  padding: 16px 17.5px 16px 17.5px;
  gap: 0px;
  border: 1px solid red;
  border-radius: 12px 0px 0px 0px;
  justify: space-between;
  opacity: 0px;
`;

const Homepage: React.FC = () => {
  return (
    <StyledDiv>
      <Stack>
        <CardComp />
      </Stack>
    </StyledDiv>
  );
};

export default Homepage;
