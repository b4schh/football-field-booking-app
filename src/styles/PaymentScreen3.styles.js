import { StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
    paddingTop: (StatusBar.currentHeight || 24) + 20,
    paddingBottom: 30,
  },

  /* ===== HEADER ===== */
  header: {
    marginBottom: 20,
  },

  headerTop: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },

  backButton: {
    fontSize: 24,
    marginRight: 12,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111827",
  },

  headerSubTitle: {
    fontSize: 14,
    color: "#6b7280",
    marginLeft: 36,
  },

  /* ===== INFO ===== */
  infoBox: {
    backgroundColor: "#f9fafb",
    padding: 16,
    borderRadius: 14,
    marginBottom: 20,
  },

  infoText: {
    fontSize: 15,
    color: "#374151",
    marginBottom: 8,
  },

  /* ===== IMAGE ===== */
  imageBox: {
    height: 230,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#d1d5db",
    borderStyle: "dashed",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    marginBottom: 24,
    overflow: "hidden",
  },

  imagePlaceholder: {
    color: "#9ca3af",
    fontSize: 14,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  /* ===== BUTTON ===== */
  submitButton: {
    backgroundColor: "#239969",
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
  },

  submitButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
  },
});
