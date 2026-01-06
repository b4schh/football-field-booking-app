import axiosClientToken from "../axiosClientToken";

export const changePasswordApi = {
  changePassword: (data) =>
    axiosClientToken.post("/users/me/change-password", data),
};
