import React, { useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/ComplexCard.styles";
import { useFavoriteStore } from "../stores/useFavouriteStore";
import { useRatingStore } from "../stores/useRatingStore";

export default function ComplexCard({ field, onPress }) {
  const navigation = useNavigation();
  const { isFavorite, toggleFavorite } = useFavoriteStore();
  const { fetchRating, getRating } = useRatingStore();

  const favorite = isFavorite(field.id);
  const averageRating = getRating(field.id);

  useEffect(() => {
    fetchRating(field.id);
  }, [field.id]);

  const handleToggleFavorite = async (e) => {
    e.stopPropagation();
    try {
      await toggleFavorite(field);
    } catch (err) {
      console.log("Lỗi toggle favorite:", err);
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.cardContainer}
      onPress={onPress}
    >
      <View style={styles.fieldImageContainer}>
        <Image source={{ uri: field.imageUrl }} style={styles.fieldImage} />

        {/* Rating */}
        <View style={styles.ratingBox}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("../assets/images/star.png")}
              style={{ width: 12, height: 12, marginRight: 4 }}
            />
            <Text style={styles.ratingText}>{averageRating}</Text>
          </View>
        </View>

        {/* ❤️ Favorite */}
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

      {/* Info */}
      <View style={[styles.infoContainer, { flexDirection: "row", alignItems: "center" }]}>
        <Image
          source={require("../assets/images/icon.jpg")}
          style={styles.avatar}
        />

        <View style={{ flex: 1, marginLeft: 10 }}>
          <Text style={styles.fieldName}>{field.name}</Text>
          <Text style={styles.address}>{field.address}</Text>
          <Text style={styles.openTime}>
            {field.openTime} - {field.closeTime} {field.phone}
          </Text>
        </View>

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
