import { styled } from "styled-components";

export const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  gap: 15px;
  width: 100%;
  height: 10%;
  justify-content: space-around;
  align-items: center;
  padding: 2px;
  //background-color: #6170e3;
  background-color: ${(props) => props.theme.colors.primary};

  span {
    color: whitesmoke;
  }

  .logo__rony {
    width: 100px;
    height: 60px;
  }

  img {
    width: 60px;
    height: 60px;
    margin: 3px;
  }
  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;
