import axiosClientToken from "../axiosClientToken";

export const getReviewsByComplexId = async (complexId) => {
  const res = await axiosClientToken.get(
    `/reviews/complex/${complexId}`
  );
  return res.data;
};
