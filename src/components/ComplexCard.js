import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/ComplexCard.styles';

export default function ComplexCard({ field, onPress, onTopRightPress, onBookPress }) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.cardContainer}
      onPress={onPress}
    >
      {/* Ảnh cụm sân */}
      <View style={styles.fieldImageContainer}>
        <Image source={{ uri: field.imageUrl }} style={styles.fieldImage} />

        {/* Rating */}
        <View style={styles.ratingBox}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={require('../assets/images/star.png')}
              style={{ width: 12, height: 12, marginRight: 4 }}
            />
            <Text style={styles.ratingText}>
              {field.rating ?? "0.0"}
            </Text>
          </View>
        </View>

        {/* Nút tim góc trên bên phải */}
        <TouchableOpacity
          style={styles.topRightButton}
          onPress={onTopRightPress}
        >
          <Image
            source={require('../assets/images/heart.png')}
            style={{ width: 16, height: 16, resizeMode: 'contain' }}
          />
        </TouchableOpacity>
      </View>

      {/* Thông tin cơ bản: bố cục 3 cột */}
      <View style={[styles.infoContainer, { flexDirection: 'row', alignItems: 'center' }]}>

        {/* Cột 1: Avatar */}
        <Image source={{ uri: field.avatarUrl }} style={styles.avatar} />

        {/* Cột 2: Thông tin */}
        <View style={{ flex: 1, marginLeft: 10 }}>
          <Text style={styles.fieldName}>{field.name}</Text>
          <Text style={styles.address}>{field.address}</Text>
          <Text style={styles.openTime}>
            {field.openTime} - {field.closeTime} {field.phone}
          </Text>
        </View>

        {/* Cột 3: Nút Đặt sân */}
        <TouchableOpacity
          style={styles.bookButton}
          onPress={onBookPress}
        >
          <Text style={styles.bookButtonText}>Đặt sân</Text>
        </TouchableOpacity>

      </View>
    </TouchableOpacity>
  );
}
