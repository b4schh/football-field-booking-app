import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/Header.styles';

export default function Header({ userName }) {
  const days = [
    "Chủ Nhật",
    "Thứ Hai",
    "Thứ Ba",
    "Thứ Tư",
    "Thứ Năm",
    "Thứ Sáu",
    "Thứ Bảy"
  ];

  const today = new Date();
  const fullDate = `${days[today.getDay()]}, ${today.toLocaleDateString()}`;

  return (
    <View style={styles.container}>

      {/* CỘT 1: AVATAR */}
      <View style={styles.column1}>
        <Image
          source={require('../assets/images/football-logo.png')}
          style={styles.avatar}
        />
      </View>

      {/* CỘT 2: THỨ + NGÀY + TÊN USER */}
      <View style={styles.column2}>
        <Text style={styles.dateText}>{fullDate}</Text>

        <Text style={styles.userNameText}>
          {userName ? userName : "Xin chào, User"}
        </Text>
      </View>

      {/* CỘT 3: ICON THÔNG BÁO (ẢNH) */}
      <TouchableOpacity style={styles.notifyButton}>
  <Image
    source={require('../assets/images/notification.png')}
    style={styles.notifyIcon}
  />
</TouchableOpacity>

    </View>
  );
}
