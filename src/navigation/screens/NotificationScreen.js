import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import styles from "../../styles/NotificationScreen.styles";
import { getNotifications } from "../../services/APIs/getNotification";
import { useNavigation } from "@react-navigation/native";

export function NotificationScreen() {
  const navigation = useNavigation();

  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false);

  // ===== FETCH NOTIFICATIONS =====
  const fetchNotifications = async () => {
    try {
      setLoading(true);
      const data = await getNotifications();
      setNotifications(data);
    } catch (error) {
      // lỗi đã log ở trong getNotifications
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={[styles.header, { paddingTop: 40, paddingBottom: 20 }]}>
        {/* Nút quay lại */}
        <TouchableOpacity
          onPress={() => navigation.navigate("HomeTabs")}
          style={{ position: "absolute", left: 15, top: 40 }}
        >
          <Text style={{ color: "#fff", fontSize: 24 }}>←</Text>
        </TouchableOpacity>

        {/* Tiêu đề căn giữa */}
        <Text
          style={[
            styles.headerTitle,
            { textAlign: "center", marginTop: 10, fontSize: 22 },
          ]}
        >
          Thông báo
        </Text>
      </View>

      {/* CONTENT */}
      {loading ? (
        <ActivityIndicator
          size="large"
          color="#239969"
          style={{ marginTop: 20 }}
        />
      ) : notifications.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Không có thông báo nào</Text>
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {notifications.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.notificationCard}
              onPress={() => console.log("Notification clicked:", item)}
            >
              <Text style={styles.notificationTitle}>{item.title}</Text>
              <Text style={styles.notificationBody}>{item.body}</Text>
              <Text style={styles.notificationTime}>
                {new Date(item.createdAt).toLocaleString("vi-VN")}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  );
}
