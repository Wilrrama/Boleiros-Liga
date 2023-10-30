import { styled } from "styled-components";
import logo from "../assets/images/liga.png";
import Switch from "react-switch";
import { StyledHeader } from "../styles/styledHeader";
import { useState } from "react";
import light from "../styles/themes/light";

import { useTheme } from "styled-components";

export const Header = ({ children, toggleTheme }) => {
  const theme = useTheme(light);

  const getCurrentDate = () => {
    const currentDate = new Date();
    const options = { year: "numeric", month: "long", day: "numeric" };
    return currentDate.toLocaleDateString(undefined, options);
  };

  const getCurrentTime = () => {
    const currentTime = new Date();
    const options = { hour: "numeric", minute: "numeric", second: "numeric" };
    return currentTime.toLocaleTimeString(undefined, options);
  };
  return (
    <>
      <StyledHeader>
        <img src={logo} alt="Logotipo da Liga Hortolandense" />
        <div>
          <h1>LIGA HORTOLANDENSE</h1>
          <h1>FUTEBOL AMADOR</h1>
          {children}
        </div>
        <section>
          <p>{getCurrentDate()}</p>
          <p>{getCurrentTime()}</p>
          <Switch
            onChange={toggleTheme}
            checked={theme === light}
            height={15}
            checkedIcon={false}
            offColor={theme.colors.secondary}
            onColor={theme.colors.secondary}
            handDiameter={15}
          />
          <p>by bigode</p>
        </section>
      </StyledHeader>
    </>
  );
};
