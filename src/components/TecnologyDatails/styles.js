import styled from "styled-components";
export const ContainerModal = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(2px);
`;
export const Container = styled.div`
  position: absolute;
  margin: 0 auto;
  max-width: 350px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 25%;
  header {
    background: var(--grey-2);
    display: flex;
    height: 40px;
    padding: 0 10px;
    align-items: center;
    justify-content: space-between;
    border-radius: 4px 4px 0 0;
    h3 {
      font-size: 12px;
    }
    button {
      background: var(--grey-2);
      border: 1px solid var(--grey-2);
      color: var(--grey-1);
    }
  }
  div {
    padding-top: 10px;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const MainStyled = styled.main`
  padding: 10px 0 20px 0;
  background: var(--grey-3);
`;

export const DivButton = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  button {
    width: 55%;
  }
  button + button {
    width: 30%;
  }
`;
