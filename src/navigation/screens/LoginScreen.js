import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "../../styles/LoginScreen.styles";
import { useNavigation } from "@react-navigation/native";

export function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Chữ phía trên */}
      <View style={styles.topTexts}>
        <Text style={styles.welcomeText}>Chào mừng!</Text>
        <Text style={styles.loginTitle}>Đăng nhập</Text>
      </View>

      {/* Box trắng */}
      <View style={styles.whiteBox}>
        {/* Form + nút đăng nhập */}
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

          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginText}>Đăng nhập</Text>
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
