import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "styled-components";
import { GlobalStyled } from "./styles/globalStyles.js";
import dark from "./styles/themes/dark.js";
import light from "./styles/themes/light.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Main() {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === light ? dark : light));
  };

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyled />
        <App toggleTheme={toggleTheme} />
      </ThemeProvider>
    </React.StrictMode>
  );
}

root.render(<Main />);
