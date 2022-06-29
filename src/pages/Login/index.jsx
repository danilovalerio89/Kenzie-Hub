import { useHistory } from "react-router-dom";
import Button from "../../components/Button";
import ContainerWrapper from "../../components/ContainerWrapper";
import Header from "../../components/Header";
import Input from "../../components/Input";
import { Container } from "./styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { userSigninThunk } from "../../store/modules/user/thunks";

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().email().required("Campo obrigatorio"),
    password: yup.string().required("Campo obrigatorio"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data) => {
    dispatch(userSigninThunk(data));
  };

  return (
    <ContainerWrapper>
      <Header loginPage />
      <Container>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <h1>Login</h1>
          <Input
            label={"Email"}
            placeholder={"Dige aqui seu e-mail"}
            register={register}
            name="email"
            errors={errors.email}
          />
          <Input
            label={"Digite sua senha"}
            placeholder={"Dige aqui seu nome"}
            register={register}
            name="password"
            type="password"
            errors={errors.password}
          />
          <Button type="submit" colorButton={"primary"} sizeButton={"big"}>
            Entrar
          </Button>
        </form>
        <span>Ainda não possui uma conta ?</span>
        <Button
          onClick={() => history.push("/register")}
          colorButton={"secondary"}
          sizeButton={"big"}
        >
          Cadastre-se
        </Button>
      </Container>
    </ContainerWrapper>
  );
}
export default Login;
