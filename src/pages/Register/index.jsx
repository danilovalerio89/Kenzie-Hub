import { Container } from "./styles";
import Header from "../../components/Header";
import ContainerWrapper from "../../components/ContainerWrapper";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { kenzieHubApi } from "../../services/api";

function Register() {
  const history = useHistory();

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Campo obrigatorio")
      .min(8, "Minimo de 8 characteres."),
    email: yup.string().required("Campo obrigatorio").email(),
    password: yup
      .string()
      .required("Campo obrigatorio")
      .min(6, "Minimo de 6 characteres"),
    confirmedPassword: yup
      .string()
      .required("Campo obrigatorio")
      .oneOf([yup.ref("password")], "Password diferente!"),
    course_module: yup.string(),
    bio: yup.string("Lorem"),
    contact: yup.string().oneOf([yup.ref("email")]),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const createUser = async (user) => {
    kenzieHubApi
      .post("/users", user)
      .then((response) => response)
      .catch((err) => console.log(err));
  };

  const onSubmitFunction = (data) => {
    data["bio"] = "Lorem";
    data["contact"] = data.email;
    createUser(data);
    history.push("/home");
  };

  return (
    <ContainerWrapper>
      <Header buttonLabel={"Voltar"} algo />
      <Container>
        <h1>Crie sua conta</h1>
        <span>Rápido e grátis, vamos nessa</span>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <Input
            label={"Nome"}
            placeholder={"Digite aqui seu nome"}
            register={register}
            name="name"
            errors={errors.name}
          />
          <Input
            label={"Email"}
            placeholder={"Digite aqui seu email"}
            register={register}
            name="email"
            errors={errors.email}
          />
          <Input
            label={"Senha"}
            placeholder={"Digite aqui sua senha"}
            register={register}
            name="password"
            type="password"
            errors={errors.password}
          />
          <Input
            label={"Confirmar Senha"}
            placeholder={"Digite aqui sua senha"}
            register={register}
            name="confirmedPassword"
            type="password"
            errors={errors.confirmedPassword}
          />
          <Input
            selectOption
            selectTypeModule
            label={"Selecionar Módulo"}
            placeholder={"Digite aqui sua senha"}
            register={register}
            name="course_module"
          />
          <Button type="submit" sizeButton={"big"}>
            Cadastrar
          </Button>
        </form>
      </Container>
    </ContainerWrapper>
  );
}
export default Register;
