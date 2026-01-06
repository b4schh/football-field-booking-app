import axiosClientToken from "../axiosClientToken";

/**
 * Upload avatar
 * @param {string} uri - local image URI
 * @returns {Promise<string>} - URL avatar trả về từ server
 */
export const uploadAvatar = async (uri) => {
  const formData = new FormData();
  const filename = uri.split("/").pop();
  const match = /\.(\w+)$/.exec(filename);
  const type = match ? `image/${match[1]}` : `image/jpeg`;

  formData.append("file", { uri, name: filename, type });

  try {
    const response = await axiosClientToken.post("/users/me/avatar", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    // Server có thể trả về url hoặc avatarUrl
    return response.data.url || response.data.avatarUrl || "";
  } catch (error) {
    console.log("❌ uploadAvatar error:", error.response?.data || error.message);
    throw error;
  }
};
