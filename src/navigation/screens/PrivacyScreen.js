import React from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "../../styles/PolicyScreen.styles";

export function PrivacyPolicyScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Chính sách quyền riêng tư</Text>

      <Text style={styles.paragraph}>
        Chúng tôi cam kết bảo vệ thông tin cá nhân của người dùng khi sử dụng
        ứng dụng.
      </Text>

      <Text style={styles.sectionTitle}>1. Thu thập thông tin</Text>
      <Text style={styles.paragraph}>
        Thông tin cá nhân như họ tên, số điện thoại chỉ được thu thập nhằm
        phục vụ mục đích vận hành hệ thống.
      </Text>

      <Text style={styles.sectionTitle}>2. Sử dụng thông tin</Text>
      <Text style={styles.paragraph}>
        Dữ liệu người dùng không được chia sẻ cho bên thứ ba nếu không có
        sự đồng ý.
      </Text>

      <Text style={styles.sectionTitle}>3. Bảo mật dữ liệu</Text>
      <Text style={styles.paragraph}>
        Chúng tôi áp dụng các biện pháp kỹ thuật nhằm bảo vệ dữ liệu khỏi
        truy cập trái phép.
      </Text>
    </ScrollView>
  );
}
