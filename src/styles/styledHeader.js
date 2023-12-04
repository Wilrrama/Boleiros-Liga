import { styled } from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  gap: 15px;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  padding: 2px;
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
    gap: 3px;
    h1 {
      font-size: 8px;
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
    gap: 5px;
    h2 {
      color: white;
      font-size: 8px;
      font-weight: 500;
    }
    p {
      color: white;
      font-size: 10px;
      font-weight: 500;
    }
  }
`;
