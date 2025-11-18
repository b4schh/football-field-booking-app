import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import styles from "../../styles/RegisterScreen.styles";
import { useNavigation } from "@react-navigation/native";

export function RegisterScreen() {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      
      {/* Dòng chữ "Đăng ký" ở phần màu xanh */}
      <View style={styles.topTextContainer}>
        <Text style={styles.registerTitle}>Đăng ký</Text>
      </View>

      {/* Box trắng */}
      <View style={styles.whiteBox}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.label}>Số điện thoại của bạn? (*)</Text>
          <TextInput
            style={styles.input}
            placeholder="Nhập số điện thoại"
            placeholderTextColor="#999"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />

          <Text style={styles.label}>Email của bạn? (*)</Text>
          <TextInput
            style={styles.input}
            placeholder="Nhập email của bạn"
            placeholderTextColor="#999"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />

          <Text style={styles.label}>Họ và tên đệm (*)</Text>
          <TextInput
            style={styles.input}
            placeholder="Nhập họ và tên đệm"
            placeholderTextColor="#999"
            value={middleName}
            onChangeText={setMiddleName}
          />

          <Text style={styles.label}>Tên thật (*)</Text>
          <TextInput
            style={styles.input}
            placeholder="Nhập tên thật"
            placeholderTextColor="#999"
            value={firstName}
            onChangeText={setFirstName}
          />

          <Text style={styles.label}>Mật khẩu (*)</Text>
          <TextInput
            style={styles.input}
            placeholder="Nhập mật khẩu"
            placeholderTextColor="#999"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <Text style={styles.label}>Nhập lại mật khẩu (*)</Text>
          <TextInput
            style={styles.input}
            placeholder="Nhập lại mật khẩu"
            placeholderTextColor="#999"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />

          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.registerText}>Đăng ký</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.loginRedirect}
            onPress={() => navigation.navigate("LoginScreen")}
          >
            <Text style={styles.redirectText}>
              Bạn đã có tài khoản? <Text style={styles.redirectBold}>Đăng nhập</Text>
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}
