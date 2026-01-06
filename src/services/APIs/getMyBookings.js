// src/services/APIs/getMyBookings.js
import axiosClientToken from "../axiosClientToken";

/**
 * API lấy danh sách booking của user hiện tại
 * @returns {Promise} trả về { data: [...], success: true/false, message: "" }
 */
export const getMyBookings = async () => {
  try {
    const res = await axiosClientToken.get("/bookings/my-bookings");
    return res.data;
  } catch (error) {
    console.log("❌ getMyBookings error:", error?.response?.data || error);
    throw error;
  }
};
