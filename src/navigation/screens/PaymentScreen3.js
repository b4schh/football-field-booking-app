import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Alert,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import styles from "../../styles/PaymentScreen3.styles";
import { uploadPaymentImage } from "../../services/APIs/postPaymentImage";

export function PaymentScreen3() {
  const route = useRoute();
  const navigation = useNavigation();

  const {
    bookingId,          // 👈 QUAN TRỌNG
    complexName,
    fieldName,
    bookingDate,
    startTime,
    endTime,
    depositAmount,
  } = route.params || {};

  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  // 📷 Chọn ảnh
  const pickImage = async () => {
    const permission =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permission.granted) {
      Alert.alert("Lỗi", "Bạn cần cấp quyền truy cập thư viện ảnh");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.8,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  // 🚀 Gửi xác nhận thanh toán
  const submitPayment = async () => {
    if (!image) {
      Alert.alert("Thiếu ảnh", "Vui lòng chọn ảnh chuyển khoản");
      return;
    }

    if (!bookingId) {
      Alert.alert("Lỗi", "Không tìm thấy mã booking");
      return;
    }

      console.log("BookingId:", bookingId);
      console.log("Image URI:", image);

    try {
      setLoading(true);

      await uploadPaymentImage(bookingId, image);

      Alert.alert(
  "Thành công",
  "Đã gửi xác nhận thanh toán. Vui lòng chờ duyệt!",
  [
    {
      text: "OK",
      onPress: () => navigation.navigate("HomeTabs"), // 👈 chuyển về Home
    },
  ]
);

    } catch (err) {
      console.log("❌ Upload payment error:", err);
      Alert.alert(
        "Lỗi",
        err?.response?.data?.message || "Không thể gửi xác nhận thanh toán"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {/* ===== HEADER ===== */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.backButton}>←</Text>
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Xác nhận thanh toán</Text>
        </View>

        <Text style={styles.headerSubTitle}>{complexName}</Text>
      </View>

      {/* ===== INFO ===== */}
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>Cụm sân: {complexName}</Text>
        <Text style={styles.infoText}>Sân: {fieldName}</Text>
        <Text style={styles.infoText}>
          Thời gian: {startTime?.slice(0, 5)} - {endTime?.slice(0, 5)}
        </Text>
        <Text style={styles.infoText}>
          Số tiền cọc: {depositAmount?.toLocaleString()} đ
        </Text>
      </View>

      {/* ===== IMAGE PICKER ===== */}
      <TouchableOpacity style={styles.imageBox} onPress={pickImage}>
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <Text style={styles.imagePlaceholder}>
            Chạm để chọn ảnh chuyển khoản
          </Text>
        )}
      </TouchableOpacity>

      {/* ===== SUBMIT ===== */}
      <TouchableOpacity
        style={[
          styles.submitButton,
          loading && { opacity: 0.7 },
        ]}
        onPress={submitPayment}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.submitButtonText}>Gửi xác nhận</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}
