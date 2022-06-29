import { combineReducers } from "redux";
import user from "./user/reducer";
import techs from "./techs/reducer";

const reducerCombiner = combineReducers({ user, techs });

export default reducerCombiner;
