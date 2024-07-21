import React from "react";
import Icon from "../../atoms/Icon/index";
import TypographyBody from "../TypographyBody";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
interface IconTypographyProps {
  iconSrc: string;
  title: string;
  description: string;
  variant?: "body1" | "caption" | "h5" | "subtitle1";
}
const StyledDiv = styled(Box)`
  display: flex;
  flex-direction: row;
  width: auto;
  height: 42px;
  gap: 10px;
  opacity: 0px;
`;
const ImageStyled = styled(Icon)`
  width: 42px;
  height: 42px;
`;
const IconTypography: React.FC<IconTypographyProps> = ({
  iconSrc,
  title,
  description,
}) => {
  return (
    <StyledDiv>
      <ImageStyled src={iconSrc} alt="not found image"></ImageStyled>
      <TypographyBody
        title={title}
        description={description}
      ></TypographyBody>
    </StyledDiv>
  );
};
export default IconTypography;
