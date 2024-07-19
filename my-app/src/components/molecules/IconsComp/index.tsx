import React from "react";
import Icon from "../../atoms/Icon";
import styled from "@emotion/styled";
import { iconsData } from "../../../utils/constants/index";
const Iconstyled = styled(Icon)`
  width: 22px;
  height: 22px;
  margin-right: 10px;
`;
const IconComp: React.FC = () => {
  return (
    <div id="Icons">
      {iconsData.map((icon, index) => (
        <Iconstyled key={index} src={icon.src} alt={icon.alt}/>
      ))}
    </div>
  );
};
export default IconComp;
