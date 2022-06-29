import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  height: 100%;
  padding-bottom: 35px;
  width: 90%;
  max-width: 500px;
  margin: 0 auto;
  background: var(--grey-3);
  form {
    width: 100%;
  }
  h1 {
    padding: 30px 0;
  }
  button {
    margin-bottom: 25px;
  }
  span {
    color: var(--grey-1);
    font-size: 10px;
    font-weight: 600;
    margin-bottom: 25px;
  }

  @media (max-width: 600px) {
    max-width: 350px;
    height: 100%;
  }
`;
export const ErrorMsg = styled.p`
  color: red;
`;
