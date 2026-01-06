import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
  ActivityIndicator,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
import styles from "../../styles/AccountScreen.styles";
import { useUserStore } from "../../stores/useUserStore";
import { uploadAvatar } from "../../services/APIs/postAvatar";

export function AccountScreen() {
  const navigation = useNavigation();
  const { user, setUser, logout } = useUserStore();

  const [fullName, setFullName] = useState("");
  const [avatarUri, setAvatarUri] = useState(user?.avatarUrl || "");
  const [loadingAvatar, setLoadingAvatar] = useState(false);

  useEffect(() => {
    if (user) {
      setFullName(`${user.firstName || ""} ${user.lastName || ""}`.trim());
      setAvatarUri(user.avatarUrl || "");
    }
  }, [user]);

  // ===== HANDLE LOGOUT =====
  const handleLogout = () => {
    Alert.alert(
      "Đăng xuất",
      "Bạn có chắc chắn muốn đăng xuất?",
      [
        { text: "Hủy", style: "cancel" },
        {
          text: "Đăng xuất",
          style: "destructive",
          onPress: async () => {
            await logout();
            navigation.reset({
              index: 0,
              routes: [{ name: "LoginScreen" }],
            });
          },
        },
      ],
      { cancelable: true }
    );
  };

  // ===== PICK AVATAR =====
  const pickAvatar = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      Alert.alert("Lỗi", "Cần cấp quyền truy cập thư viện ảnh");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaType.Images,
      quality: 0.8,
    });

    if (!result.canceled && result.assets.length > 0) {
      const uri = result.assets[0].uri;
      handleUploadAvatar(uri);
    }
  };

  // ===== HANDLE UPLOAD =====
  const handleUploadAvatar = async (uri) => {
    try {
      setLoadingAvatar(true);
      const avatarUrl = await uploadAvatar(uri);
      Alert.alert("Thành công", "Cập nhật avatar thành công!");
      setAvatarUri(avatarUrl);          // cập nhật hiển thị avatar
      setUser({ ...user, avatarUrl });  // cập nhật store
    } catch (error) {
      console.log("❌ Upload avatar error:", error.response?.data || error.message);
      Alert.alert("Lỗi", "Không thể upload avatar");
    } finally {
      setLoadingAvatar(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headerTitle}>Tài Khoản</Text>

      {/* ===== AVATAR ===== */}
      <View style={styles.profileContainer}>
        <TouchableOpacity onPress={pickAvatar} style={styles.avatarWrapper}>
          {loadingAvatar ? (
            <ActivityIndicator size="large" color="#239969" />
          ) : avatarUri ? (
            <Image source={{ uri: avatarUri }} style={styles.avatar} />
          ) : (
            <View style={styles.avatarPlaceholder}>
              <Text style={styles.avatarPlus}>＋</Text>
            </View>
          )}
        </TouchableOpacity>

        <Text style={styles.username}>{fullName || "Người dùng"}</Text>
      </View>

      {/* ===== CÁ NHÂN ===== */}
      <Text style={styles.sectionTitle}>Cá nhân</Text>
      <TouchableOpacity
        style={styles.buttonRow}
        onPress={() => navigation.navigate("EditProfileScreen")}
      >
        <Image source={require("../../assets/images/man.png")} style={styles.icon} />
        <Text style={styles.buttonText}>Chỉnh sửa thông tin cá nhân</Text>
      </TouchableOpacity>

      {/* ===== CÀI ĐẶT ===== */}
      <Text style={styles.sectionTitle}>Cài đặt</Text>
      <TouchableOpacity
        style={styles.buttonRow}
        onPress={() => navigation.navigate("NotificationScreen")}
        >
        <Image source={require("../../assets/images/bell.png")} style={styles.icon} />
        <Text style={styles.buttonText}>Thông báo</Text>
</TouchableOpacity>


      <TouchableOpacity
        style={styles.buttonRow}
        onPress={() => navigation.navigate("PasswordScreen")}
      >
        <Image source={require("../../assets/images/shield.png")} style={styles.icon} />
        <Text style={styles.buttonText}>Mật khẩu và bảo mật</Text>
      </TouchableOpacity>

      {/* ===== PHÁP LÝ ===== */}
      <Text style={styles.sectionTitle}>Chính sách pháp lý</Text>
      <TouchableOpacity
        style={styles.buttonRow}
        onPress={() => navigation.navigate("TermsOfServiceScreen")}
      >
        <Image source={require("../../assets/images/book.png")} style={styles.icon} />
        <Text style={styles.buttonText}>Điều khoản dịch vụ</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonRow}
        onPress={() => navigation.navigate("PrivacyPolicyScreen")}
      >
        <Image source={require("../../assets/images/certification.png")} style={styles.icon} />
        <Text style={styles.buttonText}>Chính sách quyền riêng tư</Text>
      </TouchableOpacity>

      {/* ===== LOGOUT ===== */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>ĐĂNG XUẤT</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
