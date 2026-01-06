// src/services/reviewsAPI.js
import axiosClient from "../axiosClient";

export const getAverageRating = async (complexId) => {
  try {
    const res = await axiosClient.get(
      `/reviews/complex/${complexId}/average-rating`
    );
    return res.data; // backend trả về { averageRating: ... }
  } catch (err) {
    console.log("🔥 Fetch average rating error:", err.message);
    throw err;
  }
};
