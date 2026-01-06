import axiosClient from "../axiosClient";

export const authRegister = {
  register: (payload) => axiosClient.post("/auth/register", payload),
};
