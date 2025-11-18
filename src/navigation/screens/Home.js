import React, { useState, useRef, useEffect } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import ComplexCard from "../../components/ComplexCard";
import ComplexSheet from "../../components/ComplexSheet";

export function Home() {
  const fields = [
    {
      id: 1,
      name: "Sân BKX",
      address: "44 Tạ Quang Bửu, Hà Nội",
      openTime: "06:00 - 22:00",
      phone: "0987654321",
      imageUrl:
        "https://cdn2.tuoitre.vn/thumb_w/480/471584752817336320/2025/7/29/omorphia-visual-low-175377204704373291665.jpg",
      avatarUrl:
        "https://images.unsplash.com/photo-1526403223453-1b6f99db94d4",
      rating: "4.5",
    },
    {
      id: 2,
      name: "Sân Thăng Long",
      address: "123 Lê Duẩn, Hà Nội",
      openTime: "07:00 - 23:00",
      phone: "0912345678",
      imageUrl:
        "https://kenh14cdn.com/203336854389633024/2025/8/16/photo-2-1755315995599876621479-1755323495159-17553234954271073956779.jpg",
      avatarUrl:
        "https://images.unsplash.com/photo-1526403223453-1b6f99db94d4",
      rating: "4.8",
    },
    {
      id: 3,
      name: "Sân Mỹ Đình",
      address: "Mỹ Đình, Hà Nội",
      openTime: "05:30 - 21:00",
      phone: "0932123456",
      imageUrl:
        "https://cdn.tienphong.vn/images/574512d9cf7ef1b3588eee26f0358da2f75e8ad9927e5e8bf59254fcdafdebe371a50c09466d502cd589ad3c5c7fd5a8/rump-25.jpg",
      avatarUrl:
        "https://images.unsplash.com/photo-1526403223453-1b6f99db94d4",
      rating: "4.2",
    },
  ];

  // 👉 state + ref cho bottom sheet
  const sheetRef = useRef(null);
  const [selectedField, setSelectedField] = useState(null);

  // 👉 mở sheet khi selectedField thay đổi
  useEffect(() => {
    if (selectedField) {
      sheetRef.current?.openPreview(); // mở 30%
    }
  }, [selectedField]);

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.searchContainer}>
        <SearchBar />
      </View>

      <View style={styles.searchPlaceholder} />

      {/* Danh sách sân */}
      <ScrollView contentContainerStyle={styles.listContainer}>
        {fields.map((field) => (
          <View key={field.id} style={styles.ComplexCardWrapper}>
            <ComplexCard
              field={field}
              onPress={() => setSelectedField(field)} // chỉ set state
            />
          </View>
        ))}
      </ScrollView>

      {/* Bottom Sheet */}
      <ComplexSheet ref={sheetRef} field={selectedField} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  searchContainer: {
    marginHorizontal: 16,
  },
  searchPlaceholder: {
    height: 25,
  },
  listContainer: {
    paddingBottom: 20,
  },
  ComplexCardWrapper: {
    marginTop: 16,
  },
});
