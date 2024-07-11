import React from "react";
import TypographyComp from "../../atoms/Typography";
import IconComp from "../../atoms/Icon";
import { iconsData } from "../Card/data";
import styled from "@emotion/styled";

const StyledIcon = styled.div`
  #Icons {
    display: flex;
    gap: 20px;
    margin-top: 10px;
  }
`;
const IconTypography: React.FC = () => {
  return (
    <div>
      <TypographyComp>Commute routes available :</TypographyComp>
      <StyledIcon>
        <div id="Icons">
          {iconsData.map((icon, index) => (
            <IconComp
              key={index}
              src={icon.src}
              alt={icon.alt}
              width="24px"
              height="24px"
            />
          ))}
        </div>
      </StyledIcon>
    </div>
  );
};
export default IconTypography;
