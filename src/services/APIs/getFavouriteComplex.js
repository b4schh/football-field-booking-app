import axiosClientToken from "../axiosClientToken"; 

// Lấy danh sách sân yêu thích của user
export const getMyFavorites = async () => {
  try {
    const response = await axiosClientToken.get("/favorites/my-favorite");
    // Giả sử API trả về mảng favorites trong response.data
    return response.data;
  } catch (error) {
    console.error("Lỗi khi lấy favorites:", error);
    throw error;
  }
};

// Toggle favorite (nếu bạn muốn dùng luôn)
export const toggleFavorite = async (complexId) => {
  try {
    const response = await axiosClientToken.post(`/favorites/${complexId}/toggle`);
    return response.data; 
  } catch (error) {
    console.error("Toggle favorite error:", error);
    throw error;
  }
};
