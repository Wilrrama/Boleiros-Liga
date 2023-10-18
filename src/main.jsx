import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "styled-components";
import { GlobalStyled } from "./styles/globalStyles.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={{}}>
      <GlobalStyled />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
