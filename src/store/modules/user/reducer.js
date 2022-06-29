import { USER_SIGNIN, USER_SIGNOUT } from "./actionTypes";

const token = localStorage.getItem("authToken") || "";
const user = JSON.parse(localStorage.getItem("userAuth")) || {};

const defaultUser = { token, user };

const userReducer = (state = defaultUser, action) => {
  switch (action.type) {
    case USER_SIGNIN:
      const { token, user } = action.userData;
      return { ...state, token, user };
    case USER_SIGNOUT:
      const { user: userLogout } = action.user;
      return userLogout;

    default:
      return state;
  }
};
export default userReducer;
