import { GiSoccerBall } from "react-icons/gi";
import { BsCardChecklist } from "react-icons/bs";
import { BsPeopleFill } from "react-icons/bs";
import { Button } from "../fragments/Button";
import { StyledNav } from "../styles/styledNav";

export const Nav = ({ setActiveSection }) => {
  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      <StyledNav>
        <Button onClick={() => handleButtonClick("sellballs")}>
          <GiSoccerBall />
        </Button>
        <Button onClick={() => handleButtonClick("people")}>
          <BsPeopleFill />
        </Button>
        <Button onClick={() => handleButtonClick("chores")}>
          <BsCardChecklist />
        </Button>
      </StyledNav>
    </>
  );
};
