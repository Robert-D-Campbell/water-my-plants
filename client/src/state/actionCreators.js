import axios from "axios";
import * as types from "./actionTypes";
import * as withAuth from "../helpers/axiosWithAuth";

const registerApi = "https://build-week-4.herokuapp.com/api/user/register";
const loginApi = "https://build-week-4.herokuapp.com/api/user/login";

export const userSignUpRequest = userData => dispatch => {
  axios
    .post(registerApi, userData)
    .then(({ data }) => {
      dispatch({ type: types.SIGN_UP });
      localStorage.setItem("token", data.token);
    })
    .catch(err => console.log(err));
};

export const attemptLogin = (login, history) => dispatch => {
  axios
    .post(loginApi, login)
    .then(({ data }) => {
      localStorage.setItem("token", data.token);
      getSingleUser().then(({data}) => {
        dispatch({ type: types.LOGIN });
        localStorage.setItem("user", JSON.stringify({username: data.username, phoneNumber: data.phoneNumber}));
        history.push("/plants");
        dispatch({ type: types.GET_USER, payload: data });
      });
    })
    .catch(err => console.log(err));
};

export const logout = () => {
  localStorage.removeItem("token");
  return { type: types.LOGOUT };
};

export const setPlantsList = plant => {
  return { type: types.ADD_PLANT, payload: plant };
};

export const addPlantToList = plant => dispatch => {
  withAuth
    .axiosWithAuth()
    .post("https://build-week-4.herokuapp.com/api/plants", plant)
    .then(({ data }) => { // NEED AT LEAST ID OF NEW PLANT FROM BACKEND
      dispatch(setPlantsList(plant));
    })
    .catch(err => console.log(err));
};


export const displayPlantsList = list => {
  return { type: types.GET_PLANT, payload: list };
};
export const getPlantList = () => dispatch => {
  withAuth
    .axiosWithAuth()
    .get("https://build-week-4.herokuapp.com/api/plants")
    .then(({ data }) => {
      dispatch(displayPlantsList(data));
    })
    .catch(err => console.log(err));
};

export const startEditPlant = plantId => {
  return { type: types.START_EDIT_PLANT, payload: plantId };
};

export const editPlant = plant => dispatch => {
  console.log("called editPlant", plant)
  withAuth
    .axiosWithAuth()
    .put(`https://build-week-4.herokuapp.com/api/plants/${plant.id}`, plant)
    .then(({ data }) => {
      dispatch({ type: types.EDIT_PLANT, payload: plant });
      // stops editing and allows adding plants again
      dispatch({ type: types.START_EDIT_PLANT, payload: 0 });
    })
    .catch(err => console.log(err));
};

export const startDeletePlant = plant => {
  return { type: types.DELETE_PLANT, payload: plant };
};

export const deletePlant = id => dispatch => {
  withAuth
    .axiosWithAuth()
    .delete(`https://build-week-4.herokuapp.com/api/plants/${id}`)
    .then(() => {
      dispatch(startDeletePlant(id));
    })
    .catch(err => console.log(err));
};

export const getSingleUser = () => {
  return withAuth
    .axiosWithAuth()
    .get("https://build-week-4.herokuapp.com/api/user/single_user");
};

export const startEditUser = user => {
  return { type: types.EDIT_USER, payload: user };
};
export const editUser = user => dispatch => {
  withAuth
    .axiosWithAuth()
    .put(`https://build-week-4.herokuapp.com/api/user/`, user)
    .then(({ data }) => {
      localStorage.setItem("user", JSON.stringify({username: data.username, phoneNumber: data.phoneNumber}));
      dispatch(startEditUser(data));
    })
    .catch(err => console.log(err));
};
