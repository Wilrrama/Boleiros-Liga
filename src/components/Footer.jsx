import { StyledFooter } from "../styles/styledFooter";
import liga from "../assets/images/liga.png";
import ksports from "../assets/images/ksports_logo.png";
import logo_cesinha from "../assets/images/logo_cesinha.jpg";

export const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <a href="https://www.facebook.com/CesinhaBrasilOficial" target="_blank">
          <img src={logo_cesinha} alt="" />
        </a>

        <a
          href="https://www.facebook.com/Kinisi.sports.oficial"
          target="_blank"
        >
          <img src={ksports} alt="" />
        </a>
      </div>

      <div>
        <a
          href="https://www.facebook.com/profile.php?id=61555954481148"
          target="_blank"
        >
          <img src={liga} alt="" />
        </a>
      </div>
    </StyledFooter>
  );
};
