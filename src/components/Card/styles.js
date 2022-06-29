import styled, { css } from "styled-components";

export const CardStyled = styled.div`
  background-color: ${(props) =>
    props.typeCardAdvanced ? css`var(--grey-2)` : css`var(--grey-4)`};
  margin: 10px auto;
  padding: 0 12px;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  p {
    font-size: 12px;
    color: ${(props) =>
      props.typeCardAdvanced ? css`var(--grey-0)` : css`var(--grey-1)`};
  }
`;
