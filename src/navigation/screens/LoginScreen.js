import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import styles from "../../styles/LoginScreen.styles";
import { useNavigation } from "@react-navigation/native";
import useLoginStore from "../../stores/useLoginStore"; // <== store login

export function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  // Lấy login + loading + error từ zustand
  const login = useLoginStore((s) => s.login);
  const loading = useLoginStore((s) => s.loading);
  const error = useLoginStore((s) => s.error);

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert("Lỗi", "Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu");
      return;
    }

    try {
      const payload = { email: username, password }; // backend login dùng email
      const res = await login(payload);
      console.log("Login success:", res);

      Alert.alert("Thành công", "Đăng nhập thành công!", [
        { text: "OK", onPress: () => navigation.navigate("HomeTabs") },
      ]);
    } catch (err) {
      Alert.alert("Lỗi đăng nhập", error || "Có lỗi xảy ra");
      console.log("Login error:", err);
    }
  };

  return (
    <View style={styles.container}>
      {/* Chữ phía trên */}
      <View style={styles.topTexts}>
        <Text style={styles.welcomeText}>Chào mừng!</Text>
        <Text style={styles.loginTitle}>Đăng nhập</Text>
      </View>

      {/* Box trắng */}
      <View style={styles.whiteBox}>
        <View style={{ flex: 1, justifyContent: "flex-start" }}>
          <Text style={styles.label}>Tên đăng nhập</Text>
          <TextInput
            style={styles.input}
            placeholder="Nhập tên đăng nhập..."
            placeholderTextColor="#999"
            value={username}
            onChangeText={setUsername}
          />

          <Text style={styles.label}>Mật khẩu</Text>
          <TextInput
            style={styles.input}
            placeholder="Nhập mật khẩu..."
            placeholderTextColor="#999"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleLogin}
            disabled={loading}
          >
            <Text style={styles.loginText}>
              {loading ? "Đang xử lý..." : "Đăng nhập"}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Dòng Đăng ký nằm đáy */}
        <TouchableOpacity
          style={styles.signupContainer}
          onPress={() => navigation.navigate("RegisterScreen")}
        >
          <Text style={styles.signupText}>
            Không có tài khoản?{" "}
            <Text style={styles.signupBold}>Đăng ký</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
