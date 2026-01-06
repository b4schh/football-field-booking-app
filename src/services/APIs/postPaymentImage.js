import axiosClientToken from "../axiosClientToken";

export const uploadPaymentImage = async (bookingId, imageUri) => {
  const formData = new FormData();

  formData.append("PaymentProofImage", {
    uri: imageUri,
    name: `payment-${Date.now()}.jpg`,
    type: "image/jpeg",
  });

  return axiosClientToken.post(
    `/bookings/${bookingId}/upload-payment`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
};
