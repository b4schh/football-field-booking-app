import { StyleSheet, StatusBar, Platform } from "react-native";

export default StyleSheet.create({
  /* ===== CONTAINER ===== */
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
    paddingHorizontal: 16,
    paddingTop: (StatusBar.currentHeight || 24) + 12,
  },

  /* ===== HEADER ===== */
  header: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },

  headerTop: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },

  backButton: {
    fontSize: 22,
    marginRight: 12,
    color: "#111827",
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111827",
  },

  headerSubTitle: {
    fontSize: 14,
    color: "#6b7280",
    marginLeft: 34,
  },

  /* ===== INFO CARD ===== */
  infoBox: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,

    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },

  infoText: {
    fontSize: 15,
    color: "#374151",
    marginBottom: 6,
  },

  /* ===== SECTION ===== */
  section: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,

    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 12,
    color: "#111827",
  },

  /* ===== STAR ===== */
  starRow: {
    flexDirection: "row",
    justifyContent: "center",
  },

  star: {
    fontSize: 36,
    color: "#e5e7eb",
    marginHorizontal: 6,
  },

  starActive: {
    color: "#fbbf24",
    textShadowColor: "#fcd34d",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
  },

  /* ===== COMMENT ===== */
  textArea: {
    backgroundColor: "#f9fafb",
    borderRadius: 14,
    padding: 14,
    minHeight: 110,
    textAlignVertical: "top",
    fontSize: 14,
    color: "#111827",
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },

  /* ===== IMAGES ===== */
  imageRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },

  image: {
    width: 96,
    height: 96,
    borderRadius: 14,
  },

  addImage: {
    width: 96,
    height: 96,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: "#d1d5db",
    borderStyle: "dashed",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9fafb",
  },

  addImageText: {
    fontSize: 32,
    color: "#9ca3af",
  },

  /* ===== BUTTON ===== */
  submitButton: {
    backgroundColor: "#239969",
    paddingVertical: 16,
    borderRadius: 18,
    alignItems: "center",
    marginBottom: 30,

    shadowColor: "#239969",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 6,
  },

  submitButtonText: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "700",
    letterSpacing: 0.4,
  },
});
