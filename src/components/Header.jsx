import { styled } from "styled-components";
import logo from "../assets/images/liga.png";
import Switch from "react-switch";
import { StyledHeader } from "../styles/styledHeader";

export const Header = ({ children }) => {
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
          <Switch height={15} checkedIcon={false} handDiameter={15} />
          <p>by bigode</p>
        </section>
      </StyledHeader>
    </>
  );
};
