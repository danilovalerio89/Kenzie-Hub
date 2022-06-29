import { Container } from "./styles";
import Logo from "../../assets/img/Logo.svg";
import Button from "../Button";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userSignoutThunk } from "../../store/modules/user/thunks";

function Header({ loginPage = false, buttonLabel }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const funcButton = () => {
    if (buttonLabel === "Voltar") {
      history.push("/");
    } else {
      dispatch(userSignoutThunk(user));
    }
  };

  return (
    <Container loginPage={loginPage}>
      <img src={Logo} alt="Kenzie Hub" />
      {!loginPage && (
        <Button colorButton={"secondary"} onClick={() => funcButton()}>
          {buttonLabel}
        </Button>
      )}
    </Container>
  );
}
export default Header;
