import axiosClientToken from "../axiosClientToken"; 

export const toggleFavorite = async (complexId) => {
  try {
    const response = await axiosClientToken.post(`/favorites/${complexId}/toggle`);
    return response.data; 
  } catch (error) {
    console.error("Toggle favorite error:", error);
    throw error;
  }
};
