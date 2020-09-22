import axios from "axios";

const instance = axios.create({ baseURL: apiURL });

export function setAuthToken(token) {
  if (token) {
    instance.defaults.headers.common["Authorization"] = "Bearer " + token;
  } else {
    delete instance.defaults.headers.common["Authorization"];
  }
}

export function loginRequest(data) {
  return instance.post("/ofserver/oflogin", data);
}
