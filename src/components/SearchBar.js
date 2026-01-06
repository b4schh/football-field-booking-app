import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Image } from "react-native";
import styles from "../styles/SearchBar.styles";
import { useComplexStore } from "../stores/useComplexStore";
import { useNavigation } from "@react-navigation/native";

export default function SearchBar() {
  const [keyword, setKeyword] = useState("");
  const navigation = useNavigation();

  const { searchComplexes } = useComplexStore();

  const handleSearch = async () => {
    if (!keyword.trim()) return;

    // Gọi search với object filter đúng chuẩn
    await searchComplexes({ name: keyword.trim() });

    // Sau khi search xong, chuyển về HomeTabs để hiển thị kết quả
    navigation.navigate("HomeTabs");
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <TextInput
          style={styles.input}
          placeholder="Tìm kiếm sân..."
          placeholderTextColor="#888"
          value={keyword}
          onChangeText={setKeyword}
        />

        <View style={styles.buttonContainer}>
          {/* 🔁 Điều hướng sang SearchScreen */}
          <TouchableOpacity
            style={styles.smallButton}
            onPress={() => navigation.navigate("SearchScreen")}
          >
            <Image
              source={require("../assets/images/find.png")}
              style={styles.icon}
            />
          </TouchableOpacity>

          {/* 🔍 Tìm theo keyword */}
          <TouchableOpacity style={styles.smallButton} onPress={handleSearch}>
            <Image
              source={require("../assets/images/find1.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
  style={styles.squareButton}
 onPress={() => navigation.navigate("FavoriteScreen")}
>
  <Image
    source={require("../assets/images/heart.png")}
    style={styles.squareIcon}
  />
</TouchableOpacity>
    </View>
  );
}
