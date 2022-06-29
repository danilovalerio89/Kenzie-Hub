import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducerCombiner from "./modules/reducerCombine";

const store = createStore(reducerCombiner, applyMiddleware(thunk));

export default store;
