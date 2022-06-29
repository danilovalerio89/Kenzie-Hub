import styled from "styled-components";

export const Container = styled.div`
  text-align: left;
  width: 80%;
  margin: 0 auto 20px;

  p {
    padding-bottom: 10px;
  }
  input {
    color: var(--grey-0);
    background-color: var(--grey-2);
    border: 1px solid var(--grey-2);
    border-radius: 3px;
    padding: 10px 15px;
    width: 100%;
    height: 48px;
    &::-webkit-input-placeholder {
      color: var(--grey-1);
    }
  }
`;
export const ErrorMsg = styled.p`
  color: red;
`;
