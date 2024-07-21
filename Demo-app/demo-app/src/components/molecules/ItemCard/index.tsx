import { Box } from "@mui/material";
import React from "react";
import TypographyBody from "../TypographyBody";
import IconTypography from "../IconTypography";
import Data from "../../../utils/constants/data";
import styled from "@emotion/styled";
const IconTypoStyle = styled(Box)`
  display: flex;
  width: 370px;
  height: 58px;
  padding: 8px 12px 8px 24px;
  justify-content: space-between;
  opacity: 0px;
  box-shadow: 0px 1px 10px 0px #2c2c2c14;
`;
const StyledTypography = styled(Box)`
  text-align: right;
`;
const ItemCard: React.FC = () => {
  console.log(Data);
  return (
    <Box>
      {Data.map((item) => (
        <IconTypoStyle>
          <Box>
            <IconTypography
              iconSrc={item.image}
              title={item.Header}
              description={item.Body}
            ></IconTypography>
          </Box>
          <Box>
            <StyledTypography>
              <TypographyBody
                title={item.TotalAmount}
                description={item.Percentage}
              ></TypographyBody>
            </StyledTypography>
          </Box>
        </IconTypoStyle>
      ))}
    </Box>
  );
};
export default ItemCard;
