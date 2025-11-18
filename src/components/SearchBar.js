import React from 'react';
import { View, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/SearchBar.styles';

import { useNavigation } from '@react-navigation/native';

export default function SearchBar() {
  const navigation = useNavigation(); // dùng hook navigation

  return (
    <View style={styles.container}>
      {/* Thanh tìm kiếm */}
      <View style={styles.searchBox}>
        <TextInput
          style={styles.input}
          placeholder="Tìm kiếm sân..."
          placeholderTextColor="#888"
        />

        {/* 2 nút nhỏ bên trong thanh search */}
        <View style={styles.buttonContainer}>
          {/* Nút đầu tiên bấm vào chuyển đến SearchScreen */}
          <TouchableOpacity
            style={styles.smallButton}
            onPress={() => navigation.navigate('SearchScreen')} // sửa điều hướng
          >
            <Image
              source={require('../assets/images/find.png')}
              style={styles.icon}
            />
          </TouchableOpacity>

          {/* Nút thứ 2 giữ nguyên */}
          <TouchableOpacity style={styles.smallButton}>
            <Image
              source={require('../assets/images/find1.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Nút vuông cạnh searchbar */}
      <TouchableOpacity style={styles.squareButton}>
        <Image
          source={require('../assets/images/heart.png')}
          style={styles.squareIcon}
        />
      </TouchableOpacity>
    </View>
  );
}
