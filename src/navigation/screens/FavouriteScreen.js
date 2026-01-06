import React from "react";
import { View, Text, ScrollView } from "react-native";
import { useFavoriteStore } from "../../stores/useFavouriteStore";
import styles from "../../styles/FavouriteScreen.styles";

// nếu bạn đang dùng ComplexCard
import ComplexCard from "../../components/ComplexCard";

export function FavoriteScreen() {
  const { favorites } = useFavoriteStore();

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Sân yêu thích</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {favorites.length === 0 ? (
          <Text style={styles.emptyText}>
            Bạn chưa thêm sân yêu thích nào.
          </Text>
        ) : (
          favorites.map((item) => (
            <ComplexCard key={item.id} complex={item} />
          ))
        )}
      </ScrollView>
    </View>
  );
}
