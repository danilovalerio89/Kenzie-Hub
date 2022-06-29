import {
  ADD_TECHNOLOGY,
  ATT_USER_TECHS,
  DELETE_USER_TECH,
} from "./actionTypes";

export const addNewTechnology = (newTech) => ({
  type: ADD_TECHNOLOGY,
  newTech,
});

export const attUserTechs = (userTechs) => ({
  type: ATT_USER_TECHS,
  userTechs,
});

export const deleteUserTech = (newList) => ({
  type: DELETE_USER_TECH,
  newList,
});

// export const
