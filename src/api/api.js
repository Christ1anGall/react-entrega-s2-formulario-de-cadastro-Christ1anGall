import axios from "axios";

const api = axios.create({
  baseURL: "https://kenziehub.herokuapp.com/",
});

const token = localStorage.getItem("@TOKEN");

api.defaults.headers.authorization = `Bearer ${token}`;

export default api;
