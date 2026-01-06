import { create } from "zustand";
import { getOwnerBankById } from "../services/APIs/getOwnerBank";

const useOwnerBankStore = create((set) => ({
  bankInfo: null,
  loading: false,
  error: null,

  fetchBankInfo: async (ownerId) => {
    try {
      set({ loading: true, error: null });
      const data = await getOwnerBankById(ownerId);
      set({ bankInfo: data, loading: false });
    } catch (err) {
      console.log("🔥 Fetch bank info error:", err);
      set({ error: err.message || "Lỗi lấy thông tin ngân hàng", loading: false });
    }
  },

  clearBankInfo: () => set({ bankInfo: null, error: null }),
}));

export default useOwnerBankStore;
