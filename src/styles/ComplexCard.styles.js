import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  cardContainer: {
    width: 340,
    height: 260,
    borderRadius: 16,
    backgroundColor: "#fff",
    overflow: "hidden",
    marginVertical: 12,
    alignSelf: "center",

    // Shadow
    elevation: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },

  /* ================= IMAGE ================= */
  fieldImageContainer: {
    width: "100%",
    height: "52%",
    position: "relative",
  },

  fieldImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  /* ================= RATING ================= */
  ratingBox: {
    position: "absolute",
    top: 10,
    left: 10,
    minWidth: 60,
    height: 28,
    backgroundColor: "#ffffffee",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 8,
  },

  ratingText: {
    color: "#f39c12",
    fontSize: 12,
    fontWeight: "700",
  },

  /* ================= HEART ================= */
  topRightButton: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#ffffffee",
    justifyContent: "center",
    alignItems: "center",
  },

  /* ================= INFO ================= */
  infoContainer: {
    flexDirection: "row",
    padding: 14,
    height: "48%",
    backgroundColor: "#fff",
    alignItems: "center",
  },

  /* Avatar */
  column1: {
    width: 60,
    alignItems: "center",
    justifyContent: "center",
  },

  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#ecf0f1",
  },

  /* Text */
  column2: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },

  fieldName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#2c3e50",
    marginBottom: 4,
  },

  address: {
    fontSize: 13,
    color: "#7f8c8d",
    marginBottom: 2,
  },

  openTime: {
    fontSize: 12,
    color: "#95a5a6",
  },

  /* Button */
  column3: {
    justifyContent: "center",
  },

  bookButton: {
    backgroundColor: "#27ae60",
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
  },

  bookButtonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
  },
});

export default styles;
