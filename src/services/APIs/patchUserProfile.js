import axiosClientToken from "../axiosClientToken";

export const patchUserApi = {
  // ✅ đúng endpoint backend của bạn
  updateProfile: (data) =>
    axiosClientToken.patch("/users/me/profile", data),
};
