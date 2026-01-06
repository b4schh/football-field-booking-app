import { create } from "zustand";

export const useFavoriteStore = create((set, get) => ({
  favorites: [], // danh sách sân yêu thích (complex hoặc field)

  // ===== ADD =====
  addFavorite: (item) => {
    const exists = get().favorites.some((f) => f.id === item.id);
    if (exists) return;

    set((state) => ({
      favorites: [...state.favorites, item],
    }));
  },

  // ===== REMOVE =====
  removeFavorite: (id) => {
    set((state) => ({
      favorites: state.favorites.filter((f) => f.id !== id),
    }));
  },

  // ===== CHECK =====
  isFavorite: (id) => {
    return get().favorites.some((f) => f.id === id);
  },

  // ===== CLEAR (optional) =====
  clearFavorites: () => set({ favorites: [] }),
}));
