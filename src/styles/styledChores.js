import { styled } from "styled-components";
import guia from "../assets/images/guia.jpg";

export const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-image: url(${guia});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: brightness(70%) contrast(40%) saturate(200%);
`;

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;

  h2 {
    font-size: 20px;
    margin: 5px;
    color: whitesmoke;
    align-self: center;
    display: flex;
    align-items: center;
    text-shadow: 1px 1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000,
      -1px -1px 0 #000;
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
      margin-left: 10px;
      padding: 10px;
      width: 80%;
      height: 40px;
    }

    button {
      color: whitesmoke;

      font-size: 30px;

      &:hover {
        color: yellowgreen;
      }
    }
  }

  div.chores-list {
    display: flex;
    align-items: center;
    flex-direction: column;
    button {
      font-size: 12px;
      padding: 5px;
      color: white;
      border-radius: 8px;
      background-color: red;
      border: 1px solid black;
    }
  }
  div.chores-list input[type="checkbox"] {
    width: 24px;
    height: 24px;
  }
  div.chores-list ul {
    margin: 10px 0 50px;
    list-style-type: none;
  }
  div.chores-list li {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  div.chores-list li span {
    font-size: 20px;
    margin: 0 10px;
  }

  li span {
    font-size: 28px;
    margin: 0 10px;
    color: whitesmoke;
    text-shadow: 1px 1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000,
      -1px -1px 0 #000;
  }

  h1 {
    font-size: 30px;
    color: whitesmoke;
    text-shadow: 1px 1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000,
      -1px -1px 0 #000;
  }

  p {
    font-size: 20px;
    color: whitesmoke;
    text-shadow: 1px 1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000,
      -1px -1px 0 #000;
  }
`;
