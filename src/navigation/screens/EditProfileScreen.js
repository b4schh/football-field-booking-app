import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "../../styles/EditProfileScreen.styles";
import { useUserStore } from "../../stores/useUserStore";

export function EditProfileScreen() {
  const navigation = useNavigation();
  const { user, updateProfile } = useUserStore();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (user) {
      setFirstName(user.firstName || "");
      setLastName(user.lastName || "");
      setPhone(user.phone || "");
    }
  }, [user]);

  const handleSave = async () => {
    try {
      await updateProfile({
        firstName,
        lastName,
        phone,
      });

      Alert.alert("Thành công", "Cập nhật thông tin thành công");
      navigation.goBack();
    } catch (err) {
      Alert.alert("Lỗi", "Không thể cập nhật thông tin");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chỉnh sửa thông tin</Text>

      {/* Họ */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>Họ</Text>
        <TextInput
          style={styles.input}
          value={firstName}
          onChangeText={setFirstName}
        />
      </View>

      {/* Tên */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>Tên</Text>
        <TextInput
          style={styles.input}
          value={lastName}
          onChangeText={setLastName}
        />
      </View>

      {/* Số điện thoại */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>Số điện thoại</Text>
        <TextInput
          style={styles.input}
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveText}>LƯU THAY ĐỔI</Text>
      </TouchableOpacity>
    </View>
  );
}
