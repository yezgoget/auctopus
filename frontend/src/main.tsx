import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";

import { ThemeProvider as MThemeProvider } from "@mui/material";
import { mtheme } from "@/styles/theme";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { normalize } from "styled-normalize";
import { theme } from "@/styles/theme";

const GlobalStyle = createGlobalStyle`
  ${normalize}
  html{
    font-size: 62.5%; // percent of the font size of your browser // 1rem = 10px
    box-sizing: border-box;
    font-family: "Pretendard Variabl/e", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  }
  body{
    margin: 0;
    background-color: lightyellow;
  } 
`;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MThemeProvider theme={mtheme}>
        <RouterProvider router={router} />
      </MThemeProvider>
    </ThemeProvider>
  </React.StrictMode>
);
