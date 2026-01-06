import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import styles from "../../styles/ComplexScreen.styles";
import useReviewStore from "../../stores/useReviewStore";
import useComplexImageStore from "../../stores/useComplexImageStore";

export function ComplexScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { field } = route.params;

  const [activeTab, setActiveTab] = useState("Thông tin");

  // ===== REVIEW STORE =====
  const {
    reviews,
    loading: reviewLoading,
    fetchReviews,
    clearReviews,
  } = useReviewStore();

  // ===== IMAGE STORE =====
  const {
    images,
    loading: imageLoading,
    fetchImages,
    clearImages,
  } = useComplexImageStore();

  // ===== RESET KHI ĐỔI SÂN =====
  useEffect(() => {
    clearReviews();
    clearImages();
    setActiveTab("Thông tin");
  }, [field.id]);

  // ===== MAIN IMAGE =====
  const mainImage =
    images.find((img) => img.isMain)?.imageUrl || field.imageUrl;

  // ===== TAB CONTENT =====
  const renderTabContent = () => {
    switch (activeTab) {
      case "Thông tin":
        return (
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionTitle}>Mô tả sân</Text>
            <View style={styles.descriptionBox}>
              <Text style={styles.descriptionText}>
                {field.description || "Chưa có mô tả sân."}
              </Text>
            </View>
          </View>
        );

      case "Hình ảnh":
        return (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ padding: 10 }}
          >
            {imageLoading ? (
              <ActivityIndicator size="small" />
            ) : images.length > 0 ? (
              images.map((img) => (
                <Image
                  key={img.id}
                  source={{ uri: img.imageUrl }}
                  style={{
                    width: 200,
                    height: 150,
                    marginRight: 10,
                    borderRadius: 10,
                    borderWidth: img.isMain ? 2 : 0,
                    borderColor: img.isMain
                      ? "#2ecc71"
                      : "transparent",
                  }}
                  resizeMode="cover"
                />
              ))
            ) : (
              <Text>Chưa có hình ảnh</Text>
            )}
          </ScrollView>
        );

      case "Đánh giá":
        return (
          <View style={{ padding: 10 }}>
            {reviewLoading ? (
              <Text>Đang tải đánh giá...</Text>
            ) : reviews.length > 0 ? (
              reviews.map((review) => (
                <View key={review.id} style={styles.reviewCard}>
                  {/* HEADER */}
                  <View style={styles.reviewHeader}>
                    <Image
                      source={{
                        uri:
                          review.user?.avatar ||
                          "https://ui-avatars.com/api/?name=" +
                            review.user?.name,
                      }}
                      style={styles.reviewAvatar}
                    />

                    <View style={{ flex: 1 }}>
                      <Text style={styles.reviewName}>
                        {review.user?.name}
                      </Text>
                      <Text style={styles.reviewRole}>
                        {review.user?.role}
                      </Text>
                    </View>

                    <Text style={styles.reviewRating}>
                      {"★".repeat(review.rating)}
                      {"☆".repeat(5 - review.rating)}
                    </Text>
                  </View>

                  {/* COMMENT */}
                  {review.comment ? (
                    <Text style={styles.reviewComment}>
                      {review.comment}
                    </Text>
                  ) : null}

                  {/* IMAGES */}
                  {review.images?.length > 0 && (
                    <ScrollView
                      horizontal
                      showsHorizontalScrollIndicator={false}
                      style={{ marginTop: 8 }}
                    >
                      {review.images.map((img, i) => (
                        <Image
                          key={i}
                          source={{ uri: img }}
                          style={styles.reviewImage}
                        />
                      ))}
                    </ScrollView>
                  )}

                  {/* FOOTER */}
                  <Text style={styles.reviewDate}>
                    {new Date(review.createdAt).toLocaleDateString(
                      "vi-VN"
                    )}
                  </Text>
                </View>
              ))
            ) : (
              <Text>Chưa có đánh giá</Text>
            )}
          </View>
        );

      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {/* ===== TOP IMAGE ===== */}
      <View style={styles.topImageContainer}>
        <Image
          source={{ uri: mainImage }}
          style={styles.topImage}
          resizeMode="cover"
        />

        {/* Back */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require("../../assets/images/back.png")}
            style={{ width: 16, height: 16 }}
          />
        </TouchableOpacity>

        {/* Heart */}
        <TouchableOpacity style={styles.heartButton}>
          <Image
            source={require("../../assets/images/heart.png")}
            style={{ width: 16, height: 16 }}
          />
        </TouchableOpacity>

        {/* Booking */}
        <TouchableOpacity
          style={styles.bookingButton}
          onPress={() =>
            navigation.navigate("BookingScreen", {
              complexId: field.id,
              complexName: field.name,
            })
          }
        >
          <Text style={styles.bookingText}>Đặt sân</Text>
        </TouchableOpacity>
      </View>

      {/* ===== INFO BOX ===== */}
{/* ===== INFO BOX ===== */}
<View style={styles.infoBox}>
  <Text style={styles.complexName}>{field.name}</Text>

  <Text style={styles.infoText}>{field.address}</Text>

  <View style={styles.divider} />

  <View style={styles.infoInline}>
    <Text style={styles.infoLabel}>Giờ mở cửa:</Text>
    <Text style={styles.infoValue}>
      {field.openTime} - {field.closeTime}
    </Text>
  </View>

  <View style={styles.infoInline}>
    <Text style={styles.infoLabel}>Liên hệ:</Text>
    <Text style={styles.infoValue}>{field.phone}</Text>
  </View>
</View>

      {/* ===== TABS ===== */}
      <View style={styles.tabContainer}>
        <View style={styles.tabHeader}>
          {["Thông tin", "Hình ảnh", "Đánh giá"].map((tab) => (
            <TouchableOpacity
              key={tab}
              onPress={() => {
                setActiveTab(tab);

                if (tab === "Đánh giá") {
                  fetchReviews(field.id);
                }

                if (tab === "Hình ảnh") {
                  fetchImages(field.id);
                }
              }}
            >
              <Text
                style={[
                  styles.tabItem,
                  activeTab === tab && styles.activeTab,
                ]}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <ScrollView style={styles.tabContent}>
          {renderTabContent()}
        </ScrollView>
      </View>
    </View>
  );
}
