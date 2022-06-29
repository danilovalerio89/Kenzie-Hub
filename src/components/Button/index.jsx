import { ButtonStyled } from "./styles";

function Button({
  children,
  changeColor = false,
  disabledHover,
  sizeButton,
  ...rest
}) {
  return (
    <ButtonStyled
      disabledHover={disabledHover}
      sizeButton={sizeButton}
      {...rest}
      changeColor={changeColor}
    >
      {children}
    </ButtonStyled>
  );
}
export default Button;
