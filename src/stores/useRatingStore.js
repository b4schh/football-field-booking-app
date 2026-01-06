import { create } from "zustand";
import { getAverageRating } from "../services/APIs/getComplexAverageRating";

export const useRatingStore = create((set, get) => ({
  ratings: {}, // { [complexId]: averageRating }
  loading: {}, // { [complexId]: boolean }
  error: {},   // { [complexId]: string }

  // Fetch rating cho 1 sân
  fetchRating: async (complexId) => {
    if (get().loading[complexId]) return;

    set((state) => ({
      loading: { ...state.loading, [complexId]: true },
      error: { ...state.error, [complexId]: null },
    }));

    try {
      const res = await getAverageRating(complexId);
      // Lấy rating từ res.data
      const avg = Number(res.data)?.toFixed(1) ?? "0.0";

      set((state) => ({
        ratings: { ...state.ratings, [complexId]: avg },
        loading: { ...state.loading, [complexId]: false },
      }));
    } catch (err) {
      set((state) => ({
        error: { ...state.error, [complexId]: err.message || "Failed" },
        loading: { ...state.loading, [complexId]: false },
      }));
      console.log(`🔥 Fetch rating failed for ${complexId}:`, err.message);
    }
  },

  // Lấy rating từ store
  getRating: (complexId) => {
    return get().ratings[complexId] ?? "0.0";
  },
}));
