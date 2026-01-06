import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";

import styles from "../../styles/ReviewScreen.styles";
import { convertToWebP } from "../../services/convertToWebP";
import { submitReview } from "../../services/APIs/postReview";

export function ReviewScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { bookingId, fieldName, complexName } = route.params || {};

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [images, setImages] = useState([]); // URI sau khi convert
  const [loading, setLoading] = useState(false);

  // ===== PICK IMAGES =====
  const pickImages = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      Alert.alert("Lỗi", "Cần cấp quyền truy cập thư viện ảnh");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaType.Images, // ✅ API mới
      allowsMultipleSelection: true,
      quality: 1, // giữ nguyên, sẽ nén ở bước convert
    });

    if (result.canceled) return;

    try {
      setLoading(true);

      // ✅ convert từng ảnh sang webp
      const convertedImages = [];
      for (const asset of result.assets) {
        const webpUri = await convertToWebP(asset.uri);
        convertedImages.push(webpUri);
      }

      setImages((prev) => [...prev, ...convertedImages]);
    } catch (err) {
      console.log("❌ Convert image error:", err);
      Alert.alert("Lỗi", "Không thể xử lý ảnh");
    } finally {
      setLoading(false);
    }
  };

  // ===== HANDLE SUBMIT =====
  const handleSubmit = async () => {
    const bookingIdNumber = Number(bookingId);
    const ratingNumber = Number(rating);

    if (!bookingIdNumber) {
      Alert.alert("Lỗi", "Booking ID không hợp lệ");
      return;
    }

    if (ratingNumber < 1 || ratingNumber > 5) {
      Alert.alert("Thiếu đánh giá", "Vui lòng chọn số sao từ 1 đến 5");
      return;
    }

    try {
      setLoading(true);

      await submitReview({
        BookingId: bookingIdNumber,
        Rating: ratingNumber,
        Comment: comment.trim(),
        Images: images, // ✅ ảnh đã là webp, size nhỏ
      });

      Alert.alert("Thành công", "Cảm ơn bạn đã đánh giá!", [
        { text: "OK", onPress: () => navigation.goBack() },
      ]);
    } catch (error) {
      console.log(
        "❌ Submit review error:",
        error.response?.data || error.message
      );

      Alert.alert(
        "Lỗi",
        error.response?.data?.errors?.Rating?.[0] ||
          "Không thể gửi đánh giá"
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
          <Text style={styles.headerTitle}>Đánh giá sân</Text>
        </View>
        <Text style={styles.headerSubTitle}>{complexName}</Text>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
        {/* ===== INFO ===== */}
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>Sân: {fieldName}</Text>
          <Text style={styles.infoText}>Booking ID: {bookingId}</Text>
        </View>

        {/* ===== RATING ===== */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Đánh giá</Text>
          <View style={styles.starRow}>
            {[1, 2, 3, 4, 5].map((i) => (
              <TouchableOpacity key={i} onPress={() => setRating(i)}>
                <Text style={[styles.star, rating >= i && styles.starActive]}>
                  ★
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* ===== COMMENT ===== */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Nhận xét</Text>
          <TextInput
            style={styles.textArea}
            placeholder="Chia sẻ trải nghiệm của bạn..."
            multiline
            value={comment}
            onChangeText={setComment}
          />
        </View>

        {/* ===== IMAGES ===== */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Hình ảnh</Text>
          <View style={styles.imageRow}>
            {images.map((uri, index) => (
              <Image key={index} source={{ uri }} style={styles.image} />
            ))}

            <TouchableOpacity style={styles.addImage} onPress={pickImages}>
              <Text style={styles.addImageText}>＋</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ===== SUBMIT ===== */}
        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSubmit}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.submitButtonText}>Gửi đánh giá</Text>
          )}
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
