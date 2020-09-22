import axios from "axios";

const instance = axios.create({ baseURL: window.apiURL });

export function setAuthToken(token) {
  if (token) {
    instance.defaults.headers.common["Authorization"] = "Bearer " + token;
  } else {
    delete instance.defaults.headers.common["Authorization"];
  }
}

export function loginRequest(data) {
  return instance.post("/acserver/login", data);
}
