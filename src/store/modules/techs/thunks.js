import { kenzieHubApi } from "../../../services/api";
import { addNewTechnology, attUserTechs } from "./actions";

export const addNewTechnologyThunk = (newTech) => (dispatch, getStore) => {
  const userToken = localStorage.getItem("authToken");
  kenzieHubApi
    .post("/users/techs", newTech, {
      "headers": {
        "Authorization": `Bearer ${userToken}`,
      },
    })
    .then((response) => dispatch(addNewTechnology(response.data)))
    .catch((err) => console.log(err));
};

export const attUserTechsThunk = () => (dispatch) => {
  const userId = JSON.parse(localStorage.getItem("userAuth"));
  kenzieHubApi
    .get(`/users/${userId.id}`)
    .then((response) => dispatch(attUserTechs(response.data.techs)))
    .catch((err) => console.log(err));
};

export const deleteUserTechThunk = (techId) => (dispatch, getStore) => {
  const userToken = localStorage.getItem("authToken");
  const { techs } = getStore();
  kenzieHubApi
    .delete(`/users/techs/${techId}`, {
      "headers": {
        "Authorization": `Bearer ${userToken}`,
      },
    })
    .then(() => {
      let deleteResult = techs.filter((itens) => itens.id !== techId);
      dispatch(attUserTechs(deleteResult));
    });
};
