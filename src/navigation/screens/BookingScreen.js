import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Platform,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { BlurView } from "expo-blur";
import { useNavigation, useRoute } from "@react-navigation/native";
import styles from "../../styles/BookingScreen.styles";
import { useBookingStore } from "../../stores/useTimeSlotStore";

const { height } = Dimensions.get("window");

export function BookingScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const complexId = route.params?.complexId || 1;

  const {
    complexData,
    selectedDate,
    loading,
    setSelectedDate,
    fetchWeeklySlots,
    getSlotsByFieldAndDate,
  } = useBookingStore();

  const [showPicker, setShowPicker] = useState(false);

  /* ===== FETCH DATA ===== */
  useEffect(() => {
    fetchWeeklySlots(complexId, selectedDate);
  }, [selectedDate, complexId]);

  /* ===== CHECK SLOT QUÁ GIỜ ===== */
  const isPastSlot = (slot, date) => {
    const now = new Date();
    const slotDate = new Date(date);
    const [hour, minute] = slot.startTime.split(":").map(Number);
    slotDate.setHours(hour, minute, 0, 0);
    return slotDate < now;
  };

  /* ===== ĐỔI NGÀY ===== */
  const changeDay = (offset) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() + offset);
    if (newDate < today) return; // ❌ không cho về ngày quá khứ
    setSelectedDate(newDate);
  };

  /* ===== HANDLE CHỌN SLOT ===== */
  const handleSlotPress = (slot, field) => {
    // Tạo bookingDate = ngày đã chọn + giờ slot
    const bookingDate = new Date(selectedDate);
    const [hour, minute] = slot.startTime.split(":").map(Number);
    bookingDate.setHours(hour, minute, 0, 0);

    // Navigate sang PaymentScreen với bookingDate là ISO string
    navigation.navigate("PaymentScreen", {
      complexId : complexId,
      complexName: complexData?.name || "",
      selectedSlot: {
        ...slot,
        fieldId: field.id, // ✅ bắt buộc
      },
      selectedDate: bookingDate.toISOString(), // ✅ ISO chuẩn, tránh Invalid Date
    });
  };

  return (
    <View style={styles.container}>
      {/* ===== HEADER ===== */}
      <View style={[styles.header, { height: height * 0.23 }]}>
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.backButton}>←</Text>
          </TouchableOpacity>

          <View style={styles.headerTitleContainer}>
            <Text style={styles.headerTitle}>Đặt lịch sân</Text>
            {complexData?.name && (
              <Text style={styles.headerSubtitle}>{complexData.name}</Text>
            )}
            <Text style={styles.weekText}>
              {selectedDate.toLocaleDateString("vi-VN")}
            </Text>
          </View>

          <View style={styles.rightPlaceholder} />
        </View>

        {/* ===== CHỌN NGÀY ===== */}
        <View style={styles.blurContainer}>
          <BlurView intensity={60} tint="light" style={styles.blurView}>
            <TouchableOpacity
              style={styles.datePickerButton}
              onPress={() => setShowPicker(true)}
            >
              <Text style={styles.dateText}>
                {selectedDate.toLocaleDateString("vi-VN")}
              </Text>
            </TouchableOpacity>
          </BlurView>
        </View>

        {/* ===== ĐIỀU HƯỚNG NGÀY ===== */}
        <View style={styles.weekNav}>
          <TouchableOpacity onPress={() => changeDay(-1)}>
            <Text style={styles.weekNavText}>← Hôm qua</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => changeDay(1)}>
            <Text style={styles.weekNavText}>Hôm sau →</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* ===== CONTENT ===== */}
      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {loading && <Text>Đang tải khung giờ...</Text>}

        {!loading &&
          complexData?.fields?.map((field) => {
            const slots = getSlotsByFieldAndDate(field, selectedDate);

            return (
              <View key={field.id} style={styles.fieldChildBox}>
                <Text style={styles.fieldChildTitle}>{field.name}</Text>

                {slots.length === 0 ? (
                  <Text style={{ color: "#999" }}>
                    Không có khung giờ cho ngày này
                  </Text>
                ) : (
                  <View style={styles.slotContainer}>
                    {slots.map((slot) => {
                      const isDisabled =
                        !slot.isAvailable || isPastSlot(slot, selectedDate);

                      return (
                        <TouchableOpacity
                          key={slot.id}
                          disabled={isDisabled}
                          style={[
                            styles.slotItem,
                            isDisabled && styles.slotDisabled,
                          ]}
                          onPress={() => handleSlotPress(slot, field)}
                        >
                          <Text style={styles.slotText}>
                            {slot.startTime.slice(0, 5)} -{" "}
                            {slot.endTime.slice(0, 5)}
                          </Text>
                          <Text style={styles.priceText}>
                            {slot.price.toLocaleString()}đ
                          </Text>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                )}
              </View>
            );
          })}
      </ScrollView>

      {/* ===== DATE PICKER ===== */}
      {showPicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display={Platform.OS === "ios" ? "spinner" : "calendar"}
          minimumDate={new Date()}
          onChange={(event, date) => {
            setShowPicker(false);
            if (date) setSelectedDate(date);
          }}
        />
      )}
    </View>
  );
}
