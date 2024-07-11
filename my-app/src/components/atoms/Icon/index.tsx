import React from "react";
import styled from "@emotion/styled";
interface Iconprops {
  src: string;
  alt: string;
  width: string;
  height: string;
}
const StyledIcon = styled.img`
  width: width;
  height: height;
`;
const IconComp: React.FC<Iconprops> = ({ src, alt }) => {
  return <StyledIcon src={src} alt={alt} />;
};
export default IconComp;
