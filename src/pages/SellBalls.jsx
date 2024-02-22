import { StyledMain, BackgroundContainer } from "../styles/styledSellBalls";
import zap from "../assets/images/zap.png";
import micro1 from "../assets/images/micro1.png";
import infinity1 from "../assets/images/infinity1.png";
import n1 from "../assets/images/n1.png";
import l1 from "../assets/images/l1.png";

export const SellBalls = () => {
  return (
    <>
      <BackgroundContainer />
      <StyledMain>
        <div className="title">
          <h1> Bolas (Campo) - Região 019</h1>
          <h3>Entre em contato pelo WhatsApp</h3>
          <a
            href="https://api.whatsapp.com/send?phone=5519994185551"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>
              <img src={zap} alt="zap log" />
              Dell
            </button>
          </a>
        </div>
        <ul className="products">
          <li className="product">
            <img src={l1} alt="" />
            <div>
              <h3>Euro Pro </h3>
              <p>Profissional, várias cores</p>
              <h3>R$ 110,00</h3>
            </div>
          </li>
          <li className="product">
            <img src={micro1} alt="" />
            <div>
              <h3>Euro Microfibra </h3>
              <p>Profissional, várias cores</p>
              <h3>R$ 110,00</h3>
            </div>
          </li>
          <li className="product">
            <img src={n1} alt="" />
            <div>
              <h3>Bola Recreativa </h3>
              <p>Não Oficial, várias cores</p>
              <h3>R$ 80,00</h3>
            </div>
          </li>
          <li className="product">
            <img src={infinity1} alt="" />
            <div>
              <h3>Euro Infiity </h3>
              <p>Bola Oficial, várias cores</p>
              <h3>R$ 100,00</h3>
            </div>
          </li>
        </ul>
      </StyledMain>
    </>
  );
};
