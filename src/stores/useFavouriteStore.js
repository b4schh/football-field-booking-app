import { create } from "zustand";
import { getMyFavorites } from "../services/APIs/getFavouriteComplex";
import { toggleFavorite } from "../services/APIs/postFavouriteComplex";

export const useFavoriteStore = create((set, get) => ({
  favorites: [],       // array of complex objects
  loading: false,
  error: null,

  // ===== Kiểm tra sân có phải favorite không =====
  isFavorite: (id) => {
    return get().favorites.some((fav) => fav.id === id);
  },

  // ===== Fetch danh sách sân yêu thích =====
  fetchFavorites: async () => {
    set({ loading: true, error: null });
    try {
      const data = await getMyFavorites(); // gọi API GET
      set({ favorites: data, loading: false });
    } catch (err) {
      set({ error: err.message || "Lỗi khi lấy danh sách", loading: false });
    }
  },

  // ===== Toggle favorite =====
  toggleFavorite: async (field) => {
    try {
      await toggleFavorite(field.id); // gọi API POST toggle

      const isFav = get().isFavorite(field.id);

      // Cập nhật local store
      set((state) => ({
        favorites: isFav
          ? state.favorites.filter((fav) => fav.id !== field.id) // remove
          : [...state.favorites, field],                           // add
      }));
    } catch (error) {
      console.error("Failed to toggle favorite:", error);
      throw error;
    }
  },
}));
