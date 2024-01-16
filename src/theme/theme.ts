import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { Box, Button,Typography } from "@mui/material";
import { createTheme, styled } from "@mui/material/styles";
import { Roboto } from "next/font/google";
import { Colors } from "./Colors";


const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});


export const theme = createTheme({
 palette:{
  mode:"dark"
 },
 typography:{
  fontFamily:roboto.style.fontFamily
 },
});

export const MainMenuFrame = styled(Box)(({theme}) => ({
  width: 250,
  height: 400,
  border: `12px ${Colors.primary}`,
  borderStyle: "ridge solid",
  borderRadius: "36px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing("6px", "8px","6px","8px"),
  background:`radial-gradient(circle, rgba(0,0,0,0.2) 10%, rgba(0,0,0,1)) ,url("bg.jpg")`,
  backgroundRepeat:"no-repeat",
  backgroundPosition:"center",
  gap:theme.spacing(4) ,
  boxShadow:`2px 2px 16px 2px ${Colors.secondary}`
}));

export const GameButton = styled(Button)(({}) => ({
  width: 200,
  height: 40,
  borderTop: `1px solid ${Colors.lime_green}`,
  borderLeft: `1px solid ${Colors.lime_green}`,
  background: Colors.secondary,
  color:Colors.white,
  clipPath: `polygon(
          4% 0,
          100% 0,
          100% 80%,
          94% 100%,
          0 100%,
          0 20%
      )`,
      "&:hover":{
        border:"none",
        background:Colors.primary
      }
    }));

    export const Title = styled(Typography)(({theme}) => ({
      position:"absolute",
      right:0,
      left:0,
      margin:"auto",
      height:1,
      color:Colors.muted,
      marginTop:theme.spacing(1)
    }))