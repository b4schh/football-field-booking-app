import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/ComplexCard.styles";
import { useFavoriteStore } from "../stores/useFavouriteStore";

export default function ComplexCard({ field, onPress }) {
  const navigation = useNavigation();

  const { addFavorite, removeFavorite, isFavorite } = useFavoriteStore();

  const favorite = isFavorite(field.id);

  const handleToggleFavorite = (e) => {
    e.stopPropagation(); // ❌ không trigger onPress của card

    if (favorite) {
      removeFavorite(field.id);
    } else {
      addFavorite(field);
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.cardContainer}
      onPress={onPress}
    >
      {/* ===== ẢNH SÂN ===== */}
      <View style={styles.fieldImageContainer}>
        <Image source={{ uri: field.imageUrl }} style={styles.fieldImage} />

        {/* Rating */}
        <View style={styles.ratingBox}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("../assets/images/star.png")}
              style={{ width: 12, height: 12, marginRight: 4 }}
            />
            <Text style={styles.ratingText}>
              {field.rating ?? "0.0"}
            </Text>
          </View>
        </View>

        {/* ❤️ NÚT YÊU THÍCH */}
        <TouchableOpacity
          style={styles.topRightButton}
          onPress={handleToggleFavorite}
        >
          <Image
            source={
              favorite
                ? require("../assets/images/full-heart.png")
                : require("../assets/images/heart.png")
            }
            style={{ width: 18, height: 18, resizeMode: "contain" }}
          />
        </TouchableOpacity>
      </View>

      {/* ===== THÔNG TIN ===== */}
      <View
        style={[
          styles.infoContainer,
          { flexDirection: "row", alignItems: "center" },
        ]}
      >
        {/* Avatar */}
        <Image
  source={require("../assets/images/icon.jpg")}
  style={styles.avatar}
/>

        {/* Text */}
        <View style={{ flex: 1, marginLeft: 10 }}>
          <Text style={styles.fieldName}>{field.name}</Text>
          <Text style={styles.address}>{field.address}</Text>
          <Text style={styles.openTime}>
            {field.openTime} - {field.closeTime} {field.phone}
          </Text>
        </View>

        {/* Button Đặt sân */}
        <TouchableOpacity
          style={styles.bookButton}
          onPress={(e) => {
            e.stopPropagation();
            navigation.navigate("BookingScreen", {
              complexId: field.id,
              complexName: field.name,
            });
          }}
        >
          <Text style={styles.bookButtonText}>Đặt sân</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}
