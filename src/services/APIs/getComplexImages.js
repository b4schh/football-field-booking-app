import axiosClientToken from "../axiosClientToken";

export const getComplexImages = async (complexId) => {
  const response = await axiosClientToken.get(
    `/complex-images/${complexId}`
  );

  // ✅ trả đúng mảng object
  return response.data.data;
};
