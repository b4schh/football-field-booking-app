import axiosClientToken from "../axiosClientToken";

/**
 * Upload avatar
 * @param {string} uri - local image URI
 * @returns {Promise<string>} - URL avatar trả về từ server
 */
export const uploadAvatar = async (uri) => {
  // Chuyển URI thành FormData để gửi file
  const formData = new FormData();
  const filename = uri.split("/").pop();
  const match = /\.(\w+)$/.exec(filename);
  const type = match ? `image/${match[1]}` : `image/jpeg`;

  formData.append("file", {
    uri,
    name: filename,
    type,
  });

  const response = await axiosClientToken.post("/users/me/avatar", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  // Giả sử server trả về URL avatar
  return response.data.url || response.data.avatarUrl || "";
};
