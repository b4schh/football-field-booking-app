import axiosClientToken from "../axiosClientToken";

export const getOwnerBankById = async (ownerId) => {
  try {
    const res = await axiosClientToken.get(`/owner/settings/by-owner/${ownerId}`);
    if (res.data?.success) {
      return res.data.data;
    } else {
      throw new Error(res.data?.message || "Không lấy được thông tin ngân hàng");
    }
  } catch (error) {
    console.error("getOwnerBankById error:", error);
    throw error;
  }
};
