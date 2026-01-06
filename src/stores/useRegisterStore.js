import { create } from "zustand";
import { authRegister } from "../services/APIs/authRegister"; // đường dẫn dựa theo folder của bạn

const useRegisterStore = create((set) => ({
  loading: false,
  error: null,
  data: null,

  register: async (payload) => {
    set({ loading: true, error: null });

    try {
      const res = await authRegister.register(payload);
      set({ loading: false, data: res.data });
      return res.data; // để màn hình nhận data nếu cần
    } catch (err) {
      const message =
        err.response?.data?.message ||
        err.response?.data ||
        err.message ||
        "Đã xảy ra lỗi";

      set({ loading: false, error: message });
      throw err; // để màn hình biết có lỗi
    }
  },

  clearError: () => set({ error: null }),
}));

export default useRegisterStore;
