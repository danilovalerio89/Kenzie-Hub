import { Container, MainStyled, DivButton, ContainerModal } from "./styles";
import { FiX } from "react-icons/fi";
import Input from "../Input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../Button";

function TecnologyDatails({ setCardModal }) {
  const schema = yup.object().shape({
    name: yup.string(),
    email: yup.string().email(),
    password: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = () => {
    // setCardModal(false);
  };

  return (
    <ContainerModal>
      <Container>
        <header>
          <h3>Tecnologia Detalhes</h3>
          <button onClick={() => setCardModal(false)}>
            <FiX size={20} />
          </button>
        </header>
        <MainStyled>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <Input
              label={"Nome do Projeto"}
              placeholder={"Material UI"}
              register={register}
              name="title"
            />
            <Input
              selectOption
              label={"Status"}
              placeholder={"Status"}
              register={register}
              name="status"
            />
            <DivButton>
              <Button
                disabledHover
                sizeButton={"big"}
                type="submit"
                disabled={true}
              >
                Salvar Alterações
              </Button>
              <Button
                colorButton={"secondary"}
                type="submit"
                onClick={(e) => console.log(e.target)}
              >
                Excluir
              </Button>
            </DivButton>
          </form>
        </MainStyled>
      </Container>
    </ContainerModal>
  );
}
export default TecnologyDatails;
