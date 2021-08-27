import {
  REGISTER_USER,
  REGISTER_FAIL,
  LOGIN_FAIL,
  LOGIN_USER,
  LOGOUT,
} from "../actions/types";
const initState = {
  user: JSON.parse(localStorage.getItem("user")),
  token: localStorage.getItem("auth-token"),
  isAuth: localStorage.getItem("isAuth") === "true" ? true : false,
  errors: null,
};

const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_USER:
    case REGISTER_USER:
      localStorage.setItem("auth-token", payload.token);
      localStorage.setItem("isAuth", true);
      localStorage.setItem("user", JSON.stringify(payload.user));
      return {
        ...state,
        user: payload.user,
        token: payload.token,
        isAuth: true,
        errors: null,
      };
    case LOGOUT : 
    localStorage.clear();
    return { ...state, user: null , token: null , isAuth: false, errors: null };

    case LOGIN_FAIL:
    case REGISTER_FAIL:
      return { ...state, user: null , token: null , isAuth: false, errors: payload };
    default:
      return state;
  }
};
export default authReducer;
