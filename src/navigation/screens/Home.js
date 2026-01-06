import React, { useEffect } from "react";
import { View, ScrollView, StyleSheet, ActivityIndicator, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import ComplexCard from "../../components/ComplexCard";

// Zustand store
import { useComplexStore } from "../../stores/useComplexStore";

export function Home() {
  const { complexes, searchResults, loading, fetchComplexes } = useComplexStore();
  const navigation = useNavigation();

  // Load mặc định danh sách khi vào Home nếu chưa có dữ liệu
  useEffect(() => {
    if (complexes.length === 0 && searchResults.length === 0) {
      fetchComplexes(1, 10);
    }
  }, []);

  // Dữ liệu hiển thị: ưu tiên searchResults nếu có
  const dataToShow = searchResults.length > 0 ? searchResults : complexes;

  // Debug log
  useEffect(() => {
    if (searchResults.length > 0) {
      console.log("🔍 Displaying search results:", searchResults.length);
      searchResults.forEach((c, i) =>
        console.log(`${i + 1}. ${c.name} - ${c.address}`)
      );
    }
  }, [searchResults]);

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header />

      {/* Search bar */}
      <View style={styles.searchContainer}>
        <SearchBar />
      </View>

      <View style={styles.searchPlaceholder} />

      {/* Loading indicator */}
      {loading && (
        <ActivityIndicator
          size="large"
          color="#00aa55"
          style={{ marginTop: 40 }}
        />
      )}

      {/* Không có kết quả */}
      {!loading && dataToShow.length === 0 && (
        <Text style={styles.noResultText}>Không tìm thấy kết quả</Text>
      )}

      {/* Danh sách complexes */}
      <ScrollView contentContainerStyle={styles.listContainer}>
        {!loading &&
          dataToShow.map((complex) => (
            <View key={complex.id} style={styles.complexCardWrapper}>
              <ComplexCard
                field={complex}
                onPress={() =>
                  navigation.navigate("ComplexScreen", { field: complex })
                }
              />
            </View>
          ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f2f2f2" },
  searchContainer: { marginHorizontal: 16 },
  searchPlaceholder: { height: 25 },
  listContainer: { paddingBottom: 20 },
  complexCardWrapper: { marginTop: 16 },
  noResultText: { textAlign: "center", marginTop: 40, color: "#999" },
});
