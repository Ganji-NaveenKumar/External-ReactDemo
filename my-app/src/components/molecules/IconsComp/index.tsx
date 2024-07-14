import React from "react";
import Icon from "../../atoms/Icon";
import { iconsData } from "../../../utils/constants/data";
const IconComp:React.FC=()=>{
    return(
        <div id="Icons">
          {iconsData.map((icon, index) => (
            <Icon
              key={index}
              src={icon.src}
              alt={icon.alt}
            />
          ))}
        </div>
    )
}
export default IconComp;