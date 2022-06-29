import styled from "styled-components";

function colorTheme(props) {
  return props.colorButton === "primary"
    ? "#FF577F"
    : props.colorButton === "secondary"
    ? "#868E96"
    : "#59323F";
}
function buttonSize(props) {
  return props.sizeButton === "big" ? "80%" : "70px";
}
function hoverColor(props) {
  return props.disabledHover === true
    ? "#59323F"
    : "var(--color-primary-focus)";
}

export const ButtonStyled = styled.button`
  width: ${buttonSize};
  height: 48px;
  color: var(--grey-0);
  background-color: ${colorTheme};
  border: ${colorTheme};
  border-radius: 3px;
  :hover {
    background-color: ${hoverColor};
  }
  cursor: ${(props) => (props.disabledHover ? "default" : "pointer")};
`;
// #FF427F;
