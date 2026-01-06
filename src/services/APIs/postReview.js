import axiosClientToken from "../axiosClientToken";

export const submitReview = async (payload = {}) => {
  const {
    BookingId,
    Rating,
    Comment,
    Images = [], // ⭐ chống undefined
  } = payload;

  const formData = new FormData();

  formData.append("BookingId", BookingId);
  formData.append("Rating", Rating);
  formData.append("Comment", Comment ?? "");

  Images.forEach((uri, index) => {
    if (!uri) return;

    formData.append("Images", {
      uri,
      name: `review-${index}.webp`,
      type: "image/webp",
    });
  });

  const response = await axiosClientToken.post("/reviews", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};
