import React from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "../../styles/PolicyScreen.styles";

export function TermsOfServiceScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Điều khoản dịch vụ</Text>

      <Text style={styles.paragraph}>
        Khi sử dụng ứng dụng, bạn đồng ý tuân thủ các điều khoản và điều kiện
        được quy định dưới đây.
      </Text>

      <Text style={styles.sectionTitle}>1. Quyền và trách nhiệm</Text>
      <Text style={styles.paragraph}>
        Người dùng có trách nhiệm cung cấp thông tin chính xác và bảo mật
        thông tin tài khoản của mình.
      </Text>

      <Text style={styles.sectionTitle}>2. Hành vi bị cấm</Text>
      <Text style={styles.paragraph}>
        Nghiêm cấm các hành vi gian lận, phá hoại hệ thống hoặc sử dụng ứng
        dụng vào mục đích trái pháp luật.
      </Text>

      <Text style={styles.sectionTitle}>3. Thay đổi điều khoản</Text>
      <Text style={styles.paragraph}>
        Chúng tôi có quyền thay đổi điều khoản dịch vụ bất kỳ lúc nào và sẽ
        thông báo đến người dùng.
      </Text>
    </ScrollView>
  );
}
