import styled from "styled-components";

export const Container = styled.header`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.loginPage ? "center" : "space-between")};
  text-align: center;
  width: 90%;
  height: 100px;

  button {
    height: 30px;
  }
  @media (max-width: 600px) {
    max-width: 350px;
  }
  @media (min-width: 600px) {
    img {
      width: 144px;
      height: 20px;
    }
  }
`;
