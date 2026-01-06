import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  Alert,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import styles from "../../styles/PaymentScreen2.styles";
import useOwnerBankStore from "../../stores/useOwnerBankStore";
import axiosClientToken from "../../services/axiosClientToken";

export function PaymentScreen2() {
  const route = useRoute();
  const navigation = useNavigation();

  const {
    bookingId,
    complexId, 
    complexName,
    fieldName,
    bookingDate,
    startTime,
    endTime,
    depositAmount,
    holdExpiresAt,
  } = route.params || {};

  const [timeLeft, setTimeLeft] = useState(0);
  const [ownerId, setOwnerId] = useState(null);

  const { bankInfo, loading, error, fetchBankInfo } = useOwnerBankStore();

  // ===== Countdown =====
  useEffect(() => {
    if (!holdExpiresAt) return;

    const expireTime = new Date(holdExpiresAt).getTime();

    const timer = setInterval(() => {
      const diff = Math.floor((expireTime - Date.now()) / 1000);
      setTimeLeft(diff);
      if (diff <= 0) {
        clearInterval(timer);
        Alert.alert(
          "Hết thời gian",
          "Đơn đặt sân đã hết hạn thanh toán",
          [{ text: "OK", onPress: () => navigation.goBack() }]
        );
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [holdExpiresAt]);

  // ===== Lấy ownerId từ complexId =====
  useEffect(() => {
    if (!complexId) return;

    const fetchOwner = async () => {
      try {
        const res = await axiosClientToken.get(`/complexes/${complexId}`);
        const data = res.data?.data;
        if (data?.ownerId) {
          setOwnerId(data.ownerId);
        }
      } catch (err) {
        // Không log ra console nữa
      }
    };

    fetchOwner();
  }, [complexId]);

  // ===== Khi có ownerId thì gọi store lấy bank info =====
  useEffect(() => {
    if (ownerId) {
      fetchBankInfo(ownerId).catch(() => {});
    }
  }, [ownerId]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.backButton}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Thanh toán cọc</Text>
        </View>
        <Text style={styles.headerSubTitle}>{complexName}</Text>
      </View>

      {/* Info */}
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>Sân: {fieldName}</Text>
        <Text style={styles.infoText}>
          Thời gian: {startTime?.slice(0, 5)} - {endTime?.slice(0, 5)}
        </Text>
        <Text style={styles.infoText}>
          Ngày:{" "}
          {bookingDate
            ? new Date(bookingDate).toLocaleDateString("vi-VN")
            : "--"}
        </Text>
      </View>

      {/* Bank / QR */}
      <View style={styles.qrBox}>
        {loading ? (
          <ActivityIndicator size="large" color="#000" />
        ) : error ? (
          <Text style={styles.infoText}>{error}</Text>
        ) : bankInfo ? (
          <>
            <Image
              source={{ uri: bankInfo.bankQrCodeUrl }}
              style={styles.qrImage}
            />
            <Text style={styles.infoText}>
              Ngân hàng: {bankInfo.bankName}
            </Text>
            <Text style={styles.infoText}>
              Số tài khoản: {bankInfo.bankAccountNumber}
            </Text>
            <Text style={styles.infoText}>
              Chủ tài khoản: {bankInfo.bankAccountName}
            </Text>
            <Text style={styles.amount}>
              Số tiền cọc: {depositAmount?.toLocaleString()} đ
            </Text>
          </>
        ) : (
          <Text style={styles.infoText}>Đang lấy thông tin ngân hàng...</Text>
        )}
      </View>

      {/* Countdown */}
      <View style={styles.timerBox}>
        <Text style={styles.timerText}>
          Thời gian còn lại: {formatTime(timeLeft)}
        </Text>
      </View>

      {/* Button */}
      <TouchableOpacity
        style={styles.confirmButton}
        onPress={() =>
          navigation.navigate("PaymentScreen3", {
            bookingId,
            complexName,
            fieldName,
            bookingDate,
            startTime,
            endTime,
            depositAmount,
          })
        }
      >
        <Text style={styles.confirmButtonText}>Đã thanh toán</Text>
      </TouchableOpacity>
    </View>
  );
}
