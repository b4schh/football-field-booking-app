import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { authLogin } from "../services/APIs/authLogin";

const useLoginStore = create((set) => ({
  loading: false,
  error: null,
  user: null,
  token: null,
  refreshToken: null,

  // 👉 Login: lấy token, refreshToken và user, lưu AsyncStorage + state
  login: async (payload) => {
  set({ loading: true, error: null });

  try {
    const res = await authLogin.login(payload);

    // 👉 Log response để debug
    console.log("📥 API response:", res.data);

    // Lấy token, refreshToken và user từ response
    const token = res.data?.data?.token;
    const refreshToken = res.data?.data?.refreshToken;
    const user = res.data?.data?.user;

    if (token) {
      // Lưu vào AsyncStorage
      await AsyncStorage.setItem("accessToken", token);
      await AsyncStorage.setItem("refreshToken", refreshToken);
      await AsyncStorage.setItem("user", JSON.stringify(user));
    }

    // Cập nhật Zustand state
    set({ loading: false, token, refreshToken, user });
    return { token, refreshToken, user };
  } catch (err) {
    const message =
      err.response?.data?.message ||
      err.response?.data ||
      err.message ||
      "Đăng nhập thất bại";
    set({ loading: false, error: message });

    // Log lỗi nếu có
    console.log("❌ API error:", err.response?.data || err.message);

    throw err;
  }
}

}));

export default useLoginStore;
