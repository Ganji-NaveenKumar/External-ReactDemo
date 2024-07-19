import { Box } from "@mui/material";
import React from "react";
import Typography from "../../atoms/Typography/index";
import ItemCard from "../ItemCard";
import { ThemeProvider } from "@mui/material";
import themes from "../../../Themes";
import styled from "@emotion/styled";
const StyledMoleculeCard = styled.div`
  margin-top: 10%;
  margin-left: 35%;
  width: 397px;
  height: 312px;
  padding: 16px 12px 16px 2px;
  border-radius: 4px;
  border: 1px solid #e8e8f7;
`;
const TypogrpahyStyled = styled.div`
  width: 398px;
  height: 28px;
  padding: 0px 24px;
  opacity: 0px;
`;
const MoleculeCard: React.FC = () => {
  return (
    <Box>
      <ThemeProvider theme={themes}>
        <StyledMoleculeCard>
          <TypogrpahyStyled>
            <Typography variant="subtitle1">Price correlation with</Typography>
          </TypogrpahyStyled>
          <ItemCard />
        </StyledMoleculeCard>
      </ThemeProvider>
    </Box>
  );
};
export default MoleculeCard;
