import { USER_SIGNIN, USER_SIGNOUT } from "./actionTypes";

export const userSignin = (userData) => ({ type: USER_SIGNIN, userData });

export const userSignout = (user) => ({ type: USER_SIGNOUT, user });
