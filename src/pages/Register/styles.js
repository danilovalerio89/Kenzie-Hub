import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  width: 90%;
  max-width: 500px;
  padding-bottom: 25px;
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
    color: var(--grey-0);
    font-size: 10px;

    margin-bottom: 25px;
  }
  @media (max-width: 600px) {
    height: 100%;
    &:last-child {
      padding-bottom: 35px;
    }
  }
`;
