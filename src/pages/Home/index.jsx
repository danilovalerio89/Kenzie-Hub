import Card from "../../components/Card";
import ContainerWrapper from "../../components/ContainerWrapper";
import Header from "../../components/Header";
import RegisterTecnology from "../../components/RegisterTecnology";
import { MainStyled, PersonalDiv, DivContainerCard } from "./styles";
import { FiPlus } from "react-icons/fi";
import TecnologyDatails from "../../components/TecnologyDatails";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { attUserTechsThunk } from "../../store/modules/techs/thunks";

function Home() {
  const { user } = useSelector(({ user }) => user);
  const techs = useSelector((store) => store.techs);
  const [showModal, setShowModal] = useState(false);
  const [cardModal, setCardModal] = useState(false);

  // console.log(user);
  console.log(techs);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(attUserTechsThunk());
  }, []);

  return (
    <>
      <ContainerWrapper>
        <Header buttonLabel={"Sair"} />
        <PersonalDiv>
          <h1>Olá, {user.name}</h1>
          <p>{user.course_module}</p>
        </PersonalDiv>
        <MainStyled>
          <nav>
            <h1>Técnologia</h1>
            <button onClick={() => setShowModal(true)}>
              <FiPlus size={20} />
            </button>
          </nav>
          <DivContainerCard>
            {techs?.length > 0 &&
              techs.map((item) => (
                <Card setCardModal={setCardModal} techs={item} key={item.id} />
              ))}
          </DivContainerCard>
        </MainStyled>
      </ContainerWrapper>
      {showModal && <RegisterTecnology setShowModal={setShowModal} />}
      {cardModal && <TecnologyDatails setCardModal={setCardModal} />}
    </>
  );
}
export default Home;
