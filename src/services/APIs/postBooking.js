import axiosClientToken from "../axiosClientToken";

export const createBooking = (payload) => {
  return axiosClientToken.post("/bookings", payload);
};
