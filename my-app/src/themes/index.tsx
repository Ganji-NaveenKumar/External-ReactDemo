import { createTheme } from "@mui/material";
const themes = createTheme({
  palette: {
    primary: {
      main: "#00000",
    },
  },
  typography: {
    subtitle1: {
      fontWeight: 600,
      color: "black",
      fontFamily: "Montserrat",
      fontSize: "16px",
      lineHeight: "24px",
      textAlign: "left",
    },
    caption: {
      fontWeight: 500,
      fontFamily: "Montserrat",
      fontSize: "12px",
      lineHeight: "16px",
      textAlign: "left",
      color: "#FF725E",
    },
    subtitle2: {
      fontWeight: 500,
      color: "#656E66",
      fontFamily: "Montserrat",
      fontSize: "12px",
      lineHeight: "16px",
      textAlign: "left",
    },
  },
});
export default themes;
