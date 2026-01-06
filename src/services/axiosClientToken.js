import axios from "axios";
import useLoginStore from "../stores/useLoginStore";

const axiosClientToken = axios.create({
  baseURL: "http://192.168.0.106/api",
  headers: { "Content-Type": "application/json" },
  timeout: 10000,
});

axiosClientToken.interceptors.request.use(
  (config) => {
    const token = useLoginStore.getState().token; // luôn lấy từ Zustand
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      console.log("⚠️ No token found for request");
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosClientToken.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Server trả về lỗi 4xx hoặc 5xx
      console.log("❌ Response error:", error.response.status, error.response.data);
    } else if (error.request) {
      // Request đã gửi nhưng server không trả về gì
      console.log("❌ No response received:", error.request);
    } else {
      // Lỗi khi setup request
      console.log("❌ Axios request setup error:", error.message);
    }
    return Promise.reject(error);
  }
);


export default axiosClientToken;
