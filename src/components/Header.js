import React, { useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/Header.styles";
import { useUserStore } from "../stores/useUserStore";

export default function Header() {
  const navigation = useNavigation();
  const { user, fetchMe } = useUserStore();

  useEffect(() => {
    fetchMe();
  }, []);

  const days = [
    "Chủ Nhật",
    "Thứ Hai",
    "Thứ Ba",
    "Thứ Tư",
    "Thứ Năm",
    "Thứ Sáu",
    "Thứ Bảy",
  ];

  const today = new Date();
  const fullDate = `${days[today.getDay()]}, ${today.toLocaleDateString("vi-VN")}`;

  return (
    <View style={styles.container}>
      {/* LOGO APP */}
      <View style={styles.column1}>
        <Image
          source={require("../assets/images/football-logo.png")} // 🔥 LOGO APP
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* DATE + GREETING */}
      <View style={styles.column2}>
        <Text style={styles.dateText}>{fullDate}</Text>

        <Text style={styles.userNameText}>
          {user
            ? `Xin chào, ${user.firstName} ${user.lastName}`
            : "Xin chào"}
        </Text>
      </View>

      {/* NOTIFICATION */}
      <TouchableOpacity
        style={styles.notifyButton}
        onPress={() => navigation.navigate("NotificationScreen")}
      >
        <Image
          source={require("../assets/images/notification.png")}
          style={styles.notifyIcon}
        />
      </TouchableOpacity>
    </View>
  );
}
