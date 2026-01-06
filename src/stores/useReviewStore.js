import { create } from "zustand";
import axiosClientToken from "../services/axiosClientToken";

const useReviewStore = create((set, get) => ({
  reviews: [],
  loading: false,
  currentComplexId: null,

  fetchReviews: async (complexId) => {
    // ✅ Nếu đang xem đúng sân rồi thì không fetch lại
    if (get().currentComplexId === complexId && get().reviews.length > 0) {
      return;
    }

    set({
      loading: true,
      reviews: [],
      currentComplexId: complexId,
    });

    try {
      const res = await axiosClientToken.get(
        `/reviews/complex/${complexId}`
      );

      set({
        reviews: res.data?.data || [],
        loading: false,
      });
    } catch (error) {
      console.log("❌ Fetch reviews error:", error);
      set({ loading: false });
    }
  },

  // ✅ reset khi cần
  clearReviews: () =>
    set({
      reviews: [],
      currentComplexId: null,
    }),
}));

export default useReviewStore;
