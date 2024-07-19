import { Box } from "@mui/material";
import React from "react";
import { ThemeProvider } from "@mui/material";
import Typography from "../../atoms/Typography/index";
import styled from "@emotion/styled";
import themes from "../../../Themes";
interface TypographyBodyProps {
  Header: string;
  Body: string;
}

const TypographyStyle = styled.div`
  gap: 4px;
  opacity: 0px;
`;
const TypographyBody: React.FC<TypographyBodyProps> = ({ Header, Body }) => {
  return (
    <Box>
      <TypographyStyle>
        <ThemeProvider theme={themes}>
          <Typography variant="body1">{Header}</Typography>
          <Typography variant="caption">{Body}</Typography>
        </ThemeProvider>
      </TypographyStyle>
    </Box>
  );
};
export default TypographyBody;
