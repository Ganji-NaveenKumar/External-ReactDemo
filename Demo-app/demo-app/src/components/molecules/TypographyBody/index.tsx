import { Box } from "@mui/material";
import React from "react";
import { ThemeProvider } from "@mui/material";
import Typography from "../../atoms/Typography/index";
import styled from "@emotion/styled";
import themes from "../../../Themes";
interface TypographyBodyProps {
  title: string;
  description: string;
}

const TypographyStyle = styled(Box)`
  gap: 4px;
  opacity: 0px;
`;
const TypographyBody: React.FC<TypographyBodyProps> = ({ title, description }) => {
  return (
    <Box>
      <TypographyStyle>
        <ThemeProvider theme={themes}>
          <Typography variant="body1">{title}</Typography>
          <Typography variant="caption">{description}</Typography>
        </ThemeProvider>
      </TypographyStyle>
    </Box>
  );
};
export default TypographyBody;
