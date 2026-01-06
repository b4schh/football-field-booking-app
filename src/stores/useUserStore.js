import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { userApi } from "../services/APIs/getMyUser";
import { patchUserApi } from "../services/APIs/patchUserProfile";
import { changePasswordApi } from "../services/APIs/patchPassword";

export const useUserStore = create((set, get) => ({
  user: null,
  loading: false,
  error: null,

  // ================= GET ME =================
  fetchMe: async () => {
    try {
      set({ loading: true, error: null });

      const res = await userApi.getMe();

      set({
        user: res.data,
        loading: false,
      });
    } catch (err) {
      console.log("🔥 Fetch me error:", err);

      // ❗ Nếu token hết hạn → logout luôn
      if (err?.response?.status === 401) {
        await get().logout();
      }

      set({
        error: err?.response?.data || err.message,
        loading: false,
      });
    }
  },

  // ================= UPDATE PROFILE =================
  updateProfile: async ({ firstName, lastName, phone }) => {
    try {
      set({ loading: true, error: null });

      await patchUserApi.updateProfile({
        firstName,
        lastName,
        phone,
      });

      set({
        user: {
          ...get().user,
          firstName,
          lastName,
          phone,
        },
        loading: false,
      });
    } catch (err) {
      set({
        error: err?.response?.data || err.message,
        loading: false,
      });
      throw err;
    }
  },

  // ================= CHANGE PASSWORD =================
  changePassword: async ({ currentPassword, newPassword }) => {
    try {
      set({ loading: true, error: null });

      await changePasswordApi.changePassword({
        currentPassword,
        newPassword,
      });

      set({ loading: false });
    } catch (err) {
      set({
        error: err?.response?.data || err.message,
        loading: false,
      });
      throw err;
    }
  },

  // ================= LOGOUT (CHUẨN) =================
  logout: async () => {
    await AsyncStorage.removeItem("accessToken");
    await AsyncStorage.removeItem("refreshToken"); // nếu có

    set({
      user: null,
      loading: false,
      error: null,
    });
  },
}));
