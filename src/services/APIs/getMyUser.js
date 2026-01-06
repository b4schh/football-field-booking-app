import axiosClientToken from "../axiosClientToken";

export const userApi = {
  getMe: async () => {
    const res = await axiosClientToken.get("/users/me");
    return res.data;
  },
};
