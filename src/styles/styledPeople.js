import { styled } from "styled-components";
import campo from "../assets/images/campo_de_futebol.png";

export const BackgroundContainer = styled.div`
  position: fixed;
  top: 1;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-image: url(${campo});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: brightness(50%) contrast(150%) saturate(200%);
`;

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;

  h1 {
    margin: 5px;
    color: #ffff;
    text-shadow: 1px 1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000,
      -1px -1px 0 #000;

    font-size: 20px;
    align-self: center;
    display: flex;
    align-items: center;
  }
  form {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    gap: 5px;
    input {
      display: flex;
      padding: 10px;
      width: 80%;
      height: 40px;
    }

    button {
      color: #ffff;
      font-size: 30px;

      &:hover {
        color: yellowgreen;
      }
    }
  }

  p {
    color: #ffff;
    text-shadow: 1px 1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000,
      -1px -1px 0 #000;
  }

  ol {
    display: flex;
    flex-direction: column;
    gap: 3px;
    justify-content: center;
    margin-right: 10px;

    li {
      color: white;
      text-shadow: 1px 1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000,
        -1px -1px 0 #000;
      button {
        border: 1px solid #ab1f3e;
        border-radius: 4px;
        width: 60px;
        height: 30px;
        margin-left: 20px;
        color: #ab1f3e;
        font-size: 12px;
        color: #ffff;
        background: #ab1f3e;

        &:hover {
          border: 1px solid #ffff;
          /*background: #ab1f3e; */
        }
      }
      span {
        color: #ffff;
        text-shadow: 1px 1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000,
          -1px -1px 0 #000;
      }
    }
  }
`;
