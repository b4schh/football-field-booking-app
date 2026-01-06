import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  Alert,
  TouchableOpacity,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import styles from "../../styles/PaymentScreen2.styles";

export function PaymentScreen2() {
  const route = useRoute();
  const navigation = useNavigation();

  const {
    bookingId,
    complexName,
    fieldName,
    bookingDate,
    startTime,
    endTime,
    depositAmount,
    holdExpiresAt,
  } = route.params || {};

  const [timeLeft, setTimeLeft] = useState(0);

  // ⏳ Countdown
  useEffect(() => {
    if (!holdExpiresAt) return;

    const expireTime = new Date(holdExpiresAt).getTime();

    const timer = setInterval(() => {
      const diff = Math.floor((expireTime - Date.now()) / 1000);

      if (diff <= 0) {
        clearInterval(timer);
        Alert.alert(
          "Hết thời gian",
          "Đơn đặt sân đã hết hạn thanh toán",
          [{ text: "OK", onPress: () => navigation.goBack() }]
        );
      } else {
        setTimeLeft(diff);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [holdExpiresAt]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  return (
    <View style={styles.container}>
      {/* ===== HEADER ===== */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.backButton}>←</Text>
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Thanh toán cọc</Text>
        </View>

        <Text style={styles.headerSubTitle}>{complexName}</Text>
      </View>

      {/* ===== INFO ===== */}
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

      {/* ===== QR ===== */}
      <View style={styles.qrBox}>
        <Image
          source={{
            uri:
              "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=THANHTOAN_SANBONG",
          }}
          style={styles.qrImage}
        />
        <Text style={styles.amount}>
          Số tiền cọc: {depositAmount?.toLocaleString()} đ
        </Text>
      </View>

      {/* ===== COUNTDOWN ===== */}
      <View style={styles.timerBox}>
        <Text style={styles.timerText}>
          Thời gian còn lại: {formatTime(timeLeft)}
        </Text>
      </View>

      {/* BUTTON */}
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
