import { createTheme } from "@mui/material";

const themes = createTheme({
  typography: {
    body1: {
      fontFamily: "Graphik",
      fontSize: "16px",
      fontWeight: 600,
      lineHeight: "22px",
      letterSpacing: "0.01em",
      color: "#343446",
    },
    caption: {
      fontFamily: "Graphik",
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "16px",
      letterSpacing: "0.01em",
      color: "#7D7D89",
    },
    subtitle1: {
      fontFamily: "Graphik",
      fontSize: "20px",
      fontWeight: 600,
      lineHeight: "28px",
      letteSpacing: "0.005em",
      color: "#343446",
    },
  },
});
export default themes;
