import { create } from "zustand";
import { getMyBookings } from "../services/APIs/getMyBookings";

export const useMyBookingStore = create((set) => ({
  bookings: [],
  loading: false,
  error: null,

  fetchMyBookings: async () => {
    set({ loading: true, error: null });
    try {
      const result = await getMyBookings();
      if (!result.success) {
        set({ error: result.message || "Lỗi tải booking", loading: false });
        return;
      }
      set({ bookings: result.data || [], loading: false });
    } catch (err) {
      set({ error: "Không thể tải lịch đặt", loading: false });
    }
  },
}));
