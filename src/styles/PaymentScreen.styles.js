import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },

  // ===== HEADER =====
  header: {
    height: 200,
    backgroundColor: "#239969",
    paddingHorizontal: 16,
    paddingTop: 50,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },

  headerTop: {
    flexDirection: "row",
    alignItems: "center",
  },

  backButton: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },

  headerTitle: {
    flex: 1,
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    marginRight: 20,
  },

  headerSubTitle: {
    color: "#E5F4EE",
    fontSize: 14,
    marginTop: 8,
    textAlign: "center",
  },

  // ===== CARD THÔNG TIN =====
  infoBox: {
    marginHorizontal: 16,
    marginTop: -40, // kéo card nổi lên header
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 6,
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },

  infoLabel: {
    color: "#6B7280",
    fontSize: 14,
  },

  infoValue: {
    color: "#111827",
    fontSize: 15,
    fontWeight: "600",
  },

  // ===== PAYMENT BUTTON =====
  paymentButton: {
    position: "absolute",
    bottom: 24,
    left: 16,
    right: 16,
    backgroundColor: "#239969",
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
    shadowColor: "#239969",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 8,
  },

  paymentText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "700",
  },
});
