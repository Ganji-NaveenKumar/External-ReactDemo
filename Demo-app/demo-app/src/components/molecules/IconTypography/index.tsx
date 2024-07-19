import React from "react";
import Icon from "../../atoms/Icon/index";
import TypographyBody from "../TypographyBody";
import styled from "@emotion/styled";
interface IconTypographyProps {
  iconSrc: string;
  typographyHeader: string;
  typographyBody: string;
  variant?: "body1" | "caption" | "h5" | "subtitle1";
}
const StyledDiv = styled.div`
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
  typographyHeader,
  typographyBody,
}) => {
  return (
    <StyledDiv>
      <ImageStyled src={iconSrc} alt="not found image"></ImageStyled>
      <TypographyBody
        Header={typographyHeader}
        Body={typographyBody}
      ></TypographyBody>
    </StyledDiv>
  );
};
export default IconTypography;
