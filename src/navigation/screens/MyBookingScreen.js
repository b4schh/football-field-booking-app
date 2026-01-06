import React, { useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useMyBookingStore } from "../../stores/useMyBookingStore";
import { cancelBooking } from "../../services/APIs/postCancelBooking";
import styles from "../../styles/MyBookingScreen.styles";

export function MyBookingScreen() {
  const navigation = useNavigation();
  const { bookings, loading, error, fetchMyBookings } = useMyBookingStore();

  useEffect(() => {
    fetchMyBookings();
  }, []);

  const onRefresh = () => {
    fetchMyBookings();
  };

  // ===== MAP STATUS =====
  const getStatusInfo = (status) => {
    const s = Number(status);

    switch (s) {
      case 0:
        return { text: "Chờ thanh toán cọc", color: styles.statusPending, isPayable: true, isReviewable: false };
      case 1:
        return { text: "Chờ được xác nhận", color: styles.statusPending, isPayable: false, isReviewable: false };
      case 2:
        return { text: "Đặt cọc thành công", color: styles.statusPaid, isPayable: false, isReviewable: false };
      case 3:
        return { text: "Bị từ chối bill", color: styles.statusCancelled, isPayable: false, isReviewable: false };
      case 4:
        return { text: "Hủy sân", color: styles.statusCancelled, isPayable: false, isReviewable: false };
      case 5:
        return { text: "Hoàn thành", color: styles.statusPaid, isPayable: false, isReviewable: true };
      case 6:
        return { text: "Hết hạn", color: styles.statusCancelled, isPayable: false, isReviewable: false };
      case 7:
        return { text: "Không xuất hiện", color: styles.statusCancelled, isPayable: false, isReviewable: false };
      default:
        return { text: "Không xác định", color: styles.status, isPayable: false, isReviewable: false };
    }
  };

  // ===== HANDLE BOOKING PRESS =====
  const handlePressBooking = (booking) => {
    const statusInfo = getStatusInfo(booking.bookingStatus);

    if (statusInfo.isPayable) {
      navigation.navigate("PaymentScreen2", {
        bookingId: booking.id,
        fieldName: booking.fieldName,
        complexName: booking.complexName,
        bookingDate: booking.bookingDate,
        startTime: booking.startTime,
        endTime: booking.endTime,
        totalAmount: booking.totalAmount,
        depositAmount: booking.depositAmount,
      });
      return;
    }

    if (statusInfo.isReviewable) {
      navigation.navigate("ReviewScreen", {
        bookingId: booking.id,
        fieldName: booking.fieldName,
        complexName: booking.complexName,
      });
    }
  };

  // ===== HANDLE CANCEL =====
  const handleCancelBooking = (bookingId) => {
    Alert.alert(
      "Hủy sân",
      "Bạn có chắc chắn muốn hủy sân này?",
      [
        { text: "Hủy", style: "cancel" },
        {
          text: "Xác nhận",
          style: "destructive",
          onPress: async () => {
            try {
              await cancelBooking(bookingId);
              Alert.alert("Thành công", "Sân đã được hủy");
              fetchMyBookings(); // reload danh sách
            } catch (error) {
              Alert.alert("Lỗi", "Không thể hủy sân");
            }
          },
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      {/* ===== HEADER ===== */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.backButton}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Lịch sử đặt sân</Text>
        </View>
      </View>

      {/* ===== CONTENT ===== */}
      <ScrollView
        style={styles.content}
        refreshControl={<RefreshControl refreshing={loading} onRefresh={onRefresh} />}
        contentContainerStyle={{ padding: 16 }}
      >
        {loading && <Text>Đang tải...</Text>}
        {error && <Text style={{ color: "red" }}>{error}</Text>}
        {!loading && bookings.length === 0 && <Text>Chưa có booking nào.</Text>}

        {bookings.map((booking) => {
          const statusInfo = getStatusInfo(booking.bookingStatus);

          return (
            <View key={booking.id} style={styles.bookingCard}>
              <TouchableOpacity
                activeOpacity={statusInfo.isPayable || statusInfo.isReviewable ? 0.7 : 1}
                onPress={() => handlePressBooking(booking)}
                disabled={!statusInfo.isPayable && !statusInfo.isReviewable}
              >
                <Text style={styles.fieldName}>{booking.fieldName}</Text>
                <Text style={styles.complexName}>{booking.complexName}</Text>
                <Text style={styles.date}>
                  Ngày: {new Date(booking.bookingDate).toLocaleDateString("vi-VN")}
                </Text>
                <Text style={styles.time}>
                  Thời gian: {booking.startTime.slice(0, 5)} - {booking.endTime.slice(0, 5)}
                </Text>
                <Text style={styles.amount}>
                  Tổng tiền: {booking.totalAmount.toLocaleString()}đ
                </Text>
                <Text style={[styles.status, statusInfo.color]}>{statusInfo.text}</Text>
                {statusInfo.isPayable && (
                  <Text style={{ marginTop: 6, color: "#239969", fontWeight: "600" }}>
                    Nhấn để thanh toán cọc
                  </Text>
                )}
                {statusInfo.isReviewable && (
                  <Text style={{ marginTop: 6, color: "#2563eb", fontWeight: "600" }}>
                    Nhấn để đánh giá
                  </Text>
                )}
              </TouchableOpacity>

              {/* ===== CANCEL BUTTON ===== */}
              {(booking.bookingStatus === 1 || booking.bookingStatus === 2) && (
  <TouchableOpacity
    onPress={() => handleCancelBooking(booking.id)}
    style={{
      marginTop: 6,
      alignSelf: "flex-start",     // nút nằm sát bên trái thẻ
      paddingVertical: 4,
      paddingHorizontal: 12,       // nhỏ gọn
      backgroundColor: "#ef4444",  // màu đỏ nhẹ
      borderRadius: 4,
    }}
  >
    <Text style={{ color: "#fff", fontWeight: "600", fontSize: 12 }}>
      Hủy sân
    </Text>
  </TouchableOpacity>
)}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
