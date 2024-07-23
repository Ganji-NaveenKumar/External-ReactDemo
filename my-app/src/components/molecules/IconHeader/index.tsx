import React from "react";
import Icon from "../../atoms/Icon";
import styled from "@emotion/styled";
import ImagePath from "../../../utils/constants";
import { Box } from "@mui/material";
const ImageComp = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const StyledImg=styled(Box)`
width:45px;
height:45px;
`;
const StyledImg1=styled(Box)`
width:24px;
height:24px;
`;
const IconHeader:React.FC=()=>{
    return(
      <ImageComp>
        <StyledImg>
        <Icon src={ImagePath.MainImage} alt='image not found'/>
        </StyledImg>
        <StyledImg1>
        <Icon src={ImagePath.More} alt='image not found'/>
        </StyledImg1>
      </ImageComp>
    );
}
export default IconHeader;