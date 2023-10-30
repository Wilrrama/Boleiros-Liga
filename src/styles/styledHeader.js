import { styled } from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  gap: 15px;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  padding: 2px;
  //background-color: #6170e3;
  background-color: ${(props) => props.theme.colors.primary};

  img {
    width: 80px;
    height: 80px;
    margin: 3px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      font-size: 12px;
      align-self: center;
      display: flex;
      align-items: center;
      color: white;
    }
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3px;
    p {
      color: white;
      font-size: 10px;
      font-weight: 500;
    }
  }
`;
