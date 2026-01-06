import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import styles from "../../styles/PaymentScreen.styles";
import { createBooking } from "../../services/APIs/postBooking";

export function PaymentScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const { complexId ,complexName, selectedDate, selectedSlot } = route.params;

  // ===== Parse ISO string thành Date object =====
  const bookingDateObj = new Date(selectedDate);
  if (isNaN(bookingDateObj)) {
    console.error("❌ Invalid selectedDate:", selectedDate);
  }

  // Hiển thị ngày và giờ
  const formattedDate = bookingDateObj.toLocaleDateString("vi-VN");
  const formattedTime = `${selectedSlot.startTime.slice(
    0,
    5
  )} - ${selectedSlot.endTime.slice(0, 5)}`;

  const handlePayment = async () => {
    try {
      setLoading(true);

      // ===== Tạo bookingDate đúng giờ slot =====
      const bookingDate = new Date(bookingDateObj);
      const [hour, minute] = selectedSlot.startTime.split(":").map(Number);
      bookingDate.setHours(hour, minute, 0, 0);

      // ===== Payload gửi backend =====
      const payload = {
        fieldId: selectedSlot.fieldId, // ✅ chắc chắn có fieldId
        timeSlotId: selectedSlot.id,
        bookingDate: bookingDate.toISOString(), // ✅ ISO chuẩn, đúng giờ slot
        note: "",
      };

      console.log("📦 PAYLOAD:", payload);

      const res = await createBooking(payload);
      const result = res.data;

      if (!result.success) {
        Alert.alert("Lỗi", result.message || "Không thể tạo booking");
        return;
      }

      const booking = result.data;

      // ===== Điều hướng sang PaymentScreen2 =====
      navigation.navigate("PaymentScreen2", {
        bookingId: booking.id,
        complexId : complexId,
        complexName: booking.complexName,
        fieldName: booking.fieldName,
        bookingDate: booking.bookingDate,
        startTime: booking.startTime,
        endTime: booking.endTime,
        depositAmount: booking.depositAmount,
        totalAmount: booking.totalAmount,
        holdExpiresAt: booking.holdExpiresAt,
      });
    } catch (error) {
      console.log("❌ ERROR:", error?.response?.data || error);
      Alert.alert("Lỗi", "Không thể tạo booking");
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
          <Text style={styles.headerTitle}>{complexName}</Text>
        </View>
        <Text style={styles.headerSubTitle}>Xác nhận thanh toán</Text>
      </View>

      {/* ===== INFO ===== */}
      <View style={styles.infoBox}>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Ngày</Text>
          <Text style={styles.infoValue}>{formattedDate}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Thời gian</Text>
          <Text style={styles.infoValue}>{formattedTime}</Text>
        </View>
      </View>

      {/* ===== BUTTON ===== */}
      <TouchableOpacity
        style={styles.paymentButton}
        onPress={handlePayment}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.paymentText}>Thanh toán</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}
