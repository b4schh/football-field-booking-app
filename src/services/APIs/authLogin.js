import axiosClient from "../axiosClient";

export const authLogin = {
  login: (payload) => axiosClient.post("/auth/login", payload),
};
