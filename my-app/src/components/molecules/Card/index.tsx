import React from "react";
import { Stack } from "@mui/material";
import styled from "@emotion/styled";
import image1 from "../../../assets/more.png";
import image from "../../../assets/image 7.png";
import IconComp from "../../atoms/Icon/index";
import TypographyComp from "../../atoms/Typography";
import IconTypography from "../IconTypography";
const StyledIcon = styled.div`
  #Icondiv {
    width: 283px;
    height: 63px;
    gap: 196px;
    opacity: 0px;
    margin-bottom: 20px;
  }
  #leftIcon {
    float: left;
  }
  #rightIcon {
    float: right;
  }
  #text {
    width: 200px;
    text-align: start;
  }
`;
const StyledTypo = styled.div`
  #text {
    text-align: start;
  }
`;
const StylediconTypo = styled.div`
  margin-top: 10px;
  #icontypography {
    display: flex;
    flex-direction: row;
    width: 300px;
  }
  #timetext {
    width: 100px;
  }
  #icontypo {
    margin-top: 5px;
    width: 202px;
  }
`;
const Cardcomp: React.FC = () => {
  return (
    <div>
      <Stack direction="row">
        <StyledIcon>
          <div id="Icondiv">
            <div id="leftIcon">
              <IconComp
                src={image}
                alt="image not found"
                width="45px"
                height="45px"
              />
            </div>
            <div id="rightIcon">
              <IconComp
                src={image1}
                alt="image not found"
                width="24px"
                height="24px"
              />
            </div>
          </div>
        </StyledIcon>
      </Stack>
      <Stack>
        <StyledTypo>
          <div id="text">
            <TypographyComp>User Experience Designer</TypographyComp>
            <TypographyComp>HP</TypographyComp>
            <TypographyComp>Hyderabad, Telangana, India</TypographyComp>
          </div>
        </StyledTypo>
      </Stack>
      <Stack>
        <StylediconTypo>
          <div id="icontypography">
            <div id="icontypo">
              <IconTypography />
            </div>
            <div id="timetext">
              <TypographyComp>1hr 36 mins ago</TypographyComp>
            </div>
          </div>
        </StylediconTypo>
      </Stack>
    </div>
  );
};
export default Cardcomp;
