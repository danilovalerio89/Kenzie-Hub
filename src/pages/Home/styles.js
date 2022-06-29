import styled from "styled-components";

export const PersonalDiv = styled.div`
  margin: 0 auto;
  width: 90%;
  border-top: 1px solid var(--grey-3);
  border-bottom: 1px solid var(--grey-3);
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
export const MainStyled = styled.main`
  margin: 0 auto;
  width: 90%;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    button {
      background: var(--grey-3);
      width: 32px;
      height: 32px;
      border: 1px solid var(--grey-3);
      color: var(--grey-0);
      border-radius: 4px;
    }
  }
`;
export const DivContainerCard = styled.div`
  border-radius: 4px;
  background: var(--grey-3);
  margin: 0 auto;
  padding: 20px 10px;
  height: 100%;
`;
