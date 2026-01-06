import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../../styles/SearchScreen.styles';
import { useNavigation } from '@react-navigation/native';
import LocationDropdown from '../../components/DropdownLocation';
import { useComplexStore } from '../../stores/useComplexStore';

export function SearchScreen() {
  const navigation = useNavigation();
  const { searchComplexes } = useComplexStore();

  const [province, setProvince] = useState(null);
  const [district, setDistrict] = useState(null);
  const [street, setStreet] = useState('');
  const [name, setName] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleSearch = async () => {
    await searchComplexes({
      name: name || undefined,
      street: street || undefined,
      ward: district?.name || undefined,       // dùng tên phường
      province: province?.name || undefined,   // dùng tên tỉnh/thành phố
      minPrice: minPrice ? parseInt(minPrice) : undefined,
      maxPrice: maxPrice ? parseInt(maxPrice) : undefined,
    });

    // Điều hướng về HomeTabs và hiển thị kết quả
    navigation.navigate('HomeTabs', { fromSearch: true });
  };

  return (
    <LinearGradient colors={['#FFFFFF', '#DFFEEF']} style={styles.container}>
      <ScrollView contentContainerStyle={{ alignItems: 'center', paddingTop: 50, paddingBottom: 50 }} showsVerticalScrollIndicator={false}>
        {/* Box 1: Search header */}
        <View style={styles.searchBox}>
          <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('HomeTabs')}>
            <Image source={require('../../assets/images/back.png')} style={styles.iconImage} resizeMode="contain" />
          </TouchableOpacity>
          <View style={styles.textContainer}>
            <Text style={styles.searchText}>TÌM KIẾM</Text>
          </View>
          <TouchableOpacity style={styles.iconButton}>
            <Image source={require('../../assets/images/reload.png')} style={styles.iconImage} resizeMode="contain" />
          </TouchableOpacity>
        </View>

        {/* Box 2: Filter */}
        <View style={styles.filterBox}>
          <Text style={[styles.label, { marginBottom: 8 }]}>Khu vực</Text>
          <LocationDropdown styles={styles} onProvinceChange={setProvince} onDistrictChange={setDistrict} />

          <Text style={[styles.label, { marginBottom: 8 }]}>Phố</Text>
          <TextInput style={[styles.inputFull, { marginBottom: 16 }]} placeholder="Nhập tên phố" value={street} onChangeText={setStreet} />

          <Text style={[styles.label, { marginBottom: 8 }]}>Tên Sân</Text>
          <TextInput style={[styles.inputFull, { marginBottom: 16 }]} placeholder="Nhập tên sân" value={name} onChangeText={setName} />

          <Text style={[styles.label, { marginBottom: 8 }]}>Khoảng giá</Text>
          <View style={styles.row}>
            <TextInput style={styles.input} placeholder="Giá tối thiểu" keyboardType="numeric" value={minPrice} onChangeText={setMinPrice} />
            <TextInput style={styles.input} placeholder="Giá tối đa" keyboardType="numeric" value={maxPrice} onChangeText={setMaxPrice} />
          </View>
        </View>

        {/* Nút Tìm kiếm */}
        <TouchableOpacity style={[styles.searchButton, { marginTop: 50 }]} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Tìm kiếm</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
}
