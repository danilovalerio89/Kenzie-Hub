import { kenzieHubApi } from "../../../services/api";
import { userSignin, userSignout } from "./actions";

export const userSigninThunk = (userData) => (dispatch) => {
  kenzieHubApi
    .post("/sessions", userData)
    .then((response) => {
      localStorage.setItem("authToken", response.data.token);
      localStorage.setItem("userAuth", JSON.stringify(response.data.user));
      dispatch(userSignin(response.data));
    })
    .catch((err) => console.log(err));
};

export const userSignoutThunk = (user) => (dispatch, getStore) => {
  user = { token: "", user: {} };
  localStorage.clear();
  dispatch(userSignout(user));
};
