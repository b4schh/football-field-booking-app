import axiosClientToken from "../axiosClientToken";

export const cancelBooking = async (bookingId) => {
  try {
    const response = await axiosClientToken.post(`/bookings/${bookingId}/cancel`);
    return response.data;
  } catch (error) {
    console.log("❌ Cancel booking error:", error.response?.data || error.message);
    throw error;
  }
};
