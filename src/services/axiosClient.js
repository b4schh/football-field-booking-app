import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://192.168.0.106/api",  // THAY IP CỦA BẠN
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
