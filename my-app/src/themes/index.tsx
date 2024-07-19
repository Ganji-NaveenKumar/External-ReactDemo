import { createTheme } from "@mui/material";
const themes=createTheme({
    palette:{
       primary:{
        main:'#00000',
       },
    },
    typography:{
        body1:{
            fontWeight:600,
            color:"black",
        },
        body2:{
            fontWeight:500,
            color:'#FF725E',
        },
        subtitle1:{
            fontWeight:500,
            color:'#656E66',
        }
    }
})
export default themes;