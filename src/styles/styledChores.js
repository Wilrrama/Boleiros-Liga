import { styled } from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;

  h2 {
    font-size: 20px;
    margin: 5px;
    color: black;
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
      margin-left: 10px;
      padding: 10px;
      width: 80%;
      height: 40px;
    }

    button {
      color: black;

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
  }

  h1 {
    font-size: 30px;
  }

  p {
    font-size: 20px;
  }
`;
