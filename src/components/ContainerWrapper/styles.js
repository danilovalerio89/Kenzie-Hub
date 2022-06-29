import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 900px;
  opacity: ${(props) => (props.showModal ? "0.5" : "1")};
  @media (max-width: 600px) {
    max-width: 350px;
    height: 100%;
  }
`;
