import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import styles from "../../styles/PasswordScreen.styles";
import { useUserStore } from "../../stores/useUserStore";

export function PasswordScreen() {
  const { changePassword, loading } = useUserStore();

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleChangePassword = async () => {
    try {
      await changePassword({ currentPassword, newPassword });
      alert("✅ Đổi mật khẩu thành công");
      setCurrentPassword("");
      setNewPassword("");
    } catch (err) {
      alert("❌ Đổi mật khẩu thất bại");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Mật khẩu & Bảo mật</Text>

      {/* Thông tin bảo mật */}
      <View style={styles.securityBox}>
        <Text style={styles.securityText}>
          Để bảo vệ tài khoản của bạn, hãy sử dụng mật khẩu mạnh và
          không chia sẻ mật khẩu với bất kỳ ai.
        </Text>
      </View>

      {/* Đổi mật khẩu */}
      <Text style={styles.sectionTitle}>Đổi mật khẩu</Text>

      <TextInput
        style={styles.input}
        placeholder="Mật khẩu hiện tại"
        secureTextEntry
        value={currentPassword}
        onChangeText={setCurrentPassword}
      />

      <TextInput
        style={styles.input}
        placeholder="Mật khẩu mới"
        secureTextEntry
        value={newPassword}
        onChangeText={setNewPassword}
      />

      <TouchableOpacity
        style={styles.submitButton}
        onPress={handleChangePassword}
        disabled={loading}
      >
        <Text style={styles.submitText}>
          {loading ? "ĐANG XỬ LÝ..." : "ĐỔI MẬT KHẨU"}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
