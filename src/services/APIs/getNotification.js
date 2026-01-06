import axiosClientToken from "../axiosClientToken";

/**
 * Lấy danh sách thông báo của user hiện tại
 * @returns {Promise<Array>} danh sách notifications
 */
export const getNotifications = async () => {
  try {
    const { data } = await axiosClientToken.get("/notifications");
    return data || [];
  } catch (error) {
    console.log("❌ getNotifications error:", error.response?.data || error.message);
    throw error;
  }
};
