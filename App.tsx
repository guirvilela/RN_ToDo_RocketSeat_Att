import { StatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import Main from "./src/screens/Main";
import theme from "./src/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        style="light"
        translucent
        backgroundColor={theme.colors.gray700}
      />
      <Main />
    </ThemeProvider>
  );
}
