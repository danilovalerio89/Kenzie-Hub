import { useDispatch } from "react-redux";
import { CardStyled } from "./styles";
import { deleteUserTechThunk } from "../../store/modules/techs/thunks";

function Card({ techs, setCardModal }) {
  const dispatch = useDispatch();

  const { id, title, status } = techs;
  console.log(id);
  console.log(title);
  console.log(status);

  return (
    <>
      {techs.status === "Avançado" ? (
        <CardStyled
          typeCardAdvanced={true}
          onClick={(event) => console.log(event.target.id)}
          id={id}
        >
          <h2>{title}</h2>
          <p>{status}</p>
        </CardStyled>
      ) : (
        <CardStyled
          typeCardAdvanced={false}
          onClick={(event) => console.log(event.target.id)}
          id={id}
        >
          <h2>{techs.title}</h2>
          <p>{techs.status}</p>
        </CardStyled>
      )}
    </>
  );
}
export default Card;

// onClick={(event) => dispatch(deleteUserTechThunk(event.target.id))}
// onClick={(event) => dispatch(deleteUserTechThunk(event.target.id))}
