import { create } from "zustand";
import { getComplexImages } from "../services/APIs/getComplexImages";

const useComplexImageStore = create((set) => ({
  images: [],
  loading: false,
  error: null,

  fetchImages: async (complexId) => {
    try {
      set({ loading: true, error: null });

      const data = await getComplexImages(complexId);

      set({
        images: data || [],
        loading: false,
      });
    } catch (err) {
      set({
        loading: false,
        error: err?.message || "Không tải được hình ảnh",
      });
    }
  },

  clearImages: () => set({ images: [] }),
}));

export default useComplexImageStore;
