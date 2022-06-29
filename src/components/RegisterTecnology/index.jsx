import { Container, MainStyled, ContainerModal } from "./styles";
import { FiX } from "react-icons/fi";
import Input from "../Input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../Button";
import axios from "axios";
import { addNewTechnologyThunk } from "../../store/modules/techs/thunks";
import { useDispatch } from "react-redux";

function RegisterTecnology({ setShowModal }) {
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    title: yup.string(),
    status: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data) => {
    dispatch(addNewTechnologyThunk(data));
    setShowModal(false);
  };

  return (
    <ContainerModal>
      <Container>
        <header>
          <h3>Cadastrar Técnologia</h3>
          <button onClick={() => setShowModal(false)}>
            <FiX size={20} />
          </button>
        </header>
        <MainStyled>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <Input
              label={"Nome"}
              placeholder={"Tecnologia"}
              register={register}
              name="title"
            />
            <Input
              selectOption
              label={"Selecionar Tecnologia"}
              placeholder={"Selecionar Tecnologia"}
              register={register}
              name="status"
            />
            <Button colorButton={"primary"} sizeButton={"big"} type="submit">
              Cadastrar Tecnologia
            </Button>
          </form>
        </MainStyled>
      </Container>
    </ContainerModal>
  );
}
export default RegisterTecnology;
