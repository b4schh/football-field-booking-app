// stores/useTimeSlotStore.js
import { create } from "zustand";
import { weeklySlotApi } from "../services/APIs/getWeeklySlot";

const getWeekRange = (date) => {
  const d = new Date(date);
  const day = d.getDay() || 7; // CN = 7
  const start = new Date(d);
  start.setDate(d.getDate() - day + 1);

  const end = new Date(start);
  end.setDate(start.getDate() + 6);

  return { start, end };
};

export const useBookingStore = create((set, get) => ({
  complexData: null,
  selectedDate: new Date(),
  selectedSlot: null,
  loading: false,

  setSelectedDate: (date) => set({ selectedDate: date }),
  setSelectedSlot: (slot) => set({ selectedSlot: slot }),

  fetchWeeklySlots: async (complexId, date) => {
    try {
      set({ loading: true });

      const { start, end } = getWeekRange(date);

      const data = await weeklySlotApi.getWeeklySlot(
        complexId,
        start,
        end
      );

      set({ complexData: data });
    } catch (e) {
      console.log("fetchWeeklySlots error:", e);
    } finally {
      set({ loading: false });
    }
  },

  getSlotsByFieldAndDate: (field, date) => {
    const key = date.toISOString().split("T")[0];
    return field?.dailyTimeSlots?.[key] || [];
  },
}));
