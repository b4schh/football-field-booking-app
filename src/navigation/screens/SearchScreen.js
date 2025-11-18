import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../../styles/SearchScreen.styles';
import { useNavigation } from '@react-navigation/native';

export function SearchScreen() {
    const navigation = useNavigation();

  return (
    <LinearGradient
      colors={['#FFFFFF', '#DFFEEF']}
      style={styles.container}
    >
      <ScrollView
        contentContainerStyle={{
          alignItems: 'center',
          paddingTop: 50,
          paddingBottom: 50, // khoảng cách nút tới đáy
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* Box 1: Search */}
        <View style={styles.searchBox}>
          <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('Home')}>
            <Image
              source={require('../../assets/images/back.png')}
              style={styles.iconImage}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <View style={styles.textContainer}>
            <Text style={styles.searchText}>TÌM KIẾM</Text>
          </View>

          <TouchableOpacity style={styles.iconButton}>
            <Image
              source={require('../../assets/images/reload.png')}
              style={styles.iconImage}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        {/* Box 2: Filter */}
        <View style={styles.filterBox}>
          <Text style={styles.label}>Khu vực</Text>
          <View style={styles.row}>
            <TouchableOpacity style={styles.dropdown}>
              <Text style={styles.dropdownText}>Tỉnh/Thành phố</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dropdown}>
              <Text style={styles.dropdownText}>Phường/Xã</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.label}>Loại sân</Text>
          <TouchableOpacity style={styles.dropdownFull}>
            <Text style={styles.dropdownText}>Chọn loại sân</Text>
          </TouchableOpacity>

          <Text style={styles.label}>Kích cỡ sân</Text>
          <TouchableOpacity style={styles.dropdownFull}>
            <Text style={styles.dropdownText}>Chọn kích cỡ</Text>
          </TouchableOpacity>

          <Text style={styles.label}>Khoảng giá</Text>
          <View style={styles.row}>
            <TextInput
              style={styles.input}
              placeholder="Giá tối thiểu"
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Giá tối đa"
              keyboardType="numeric"
            />
          </View>

          <Text style={styles.label}>Đánh giá trung bình</Text>
          <TouchableOpacity style={styles.dropdownFull}>
            <Text style={styles.dropdownText}>Chọn mức đánh giá</Text>
          </TouchableOpacity>
        </View>

        {/* Box 3: Nút Tìm kiếm */}
        <TouchableOpacity style={[styles.searchButton, { marginTop: 150 }]}>
          <Text style={styles.searchButtonText}>Tìm kiếm</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
}
