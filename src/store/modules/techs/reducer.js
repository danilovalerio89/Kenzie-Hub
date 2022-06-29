import {
  ADD_TECHNOLOGY,
  ATT_USER_TECHS,
  DELETE_USER_TECH,
} from "./actionTypes";

const defaultTech = { allTechs: [], tech: "" };

const technologyReducer = (state = defaultTech, action) => {
  switch (action.type) {
    case ADD_TECHNOLOGY:
      return [...state, action.newTech];
    case ATT_USER_TECHS:
      return action.userTechs;
    case DELETE_USER_TECH:
      return action.newList;
    default:
      return state;
  }
};
export default technologyReducer;
