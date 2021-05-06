import axios from "axios";
import authActions from "./auth-actions";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = (accountingData) => (dispatch) => {
  dispatch(authActions.registerRequest());
  axios
    .post("/users/signup", accountingData)
    .then(({ data }) => {
      token.set(data.token);
      return dispatch(authActions.registerSuccess(data));
    })
    .catch((error) => dispatch(authActions.registerError(error.message)));
};

const logIn = (accountingData) => (dispatch) => {
  dispatch(authActions.loginRequest());
  axios
    .post("/users/login", accountingData)
    .then(({ data }) => {
      token.set(data.token);
      return dispatch(authActions.loginSuccess(data));
    })
    .catch((error) => dispatch(authActions.logoutError(error.message)));
};
const logOut = () => (dispatch) => {
  dispatch(authActions.logoutRequest());
  axios
    .post("/users/logout")
    .then(() => {
      token.unset();
      return dispatch(authActions.logoutSuccess());
    })
    .catch((error) => dispatch(authActions.logoutError(error.message)));
};

const getCurrentUser = () => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();
  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);
  dispatch(authActions.getCurrentUserRequest());

  axios
    .get("/users/current")
    .then(({ data }) => dispatch(authActions.getCurrentUserSuccess(data)))
    .catch((error) => dispatch(authActions.getCurrentUserError(error.message)));
};

export default {
  register,
  logIn,
  logOut,
  getCurrentUser,
};
