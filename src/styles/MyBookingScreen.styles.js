import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },

  /* ===== HEADER (GIỐNG PAYMENT SCREEN) ===== */
  header: {
    height: 120,
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

  /* ===== CONTENT ===== */
  content: {
    flex: 1, // đẩy list nổi lên header
    paddingHorizontal: 5,
  },

  bookingCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 6,
  },

  fieldName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
  },

  complexName: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 2,
  },

  date: {
    marginTop: 8,
    fontSize: 14,
    color: "#374151",
  },

  time: {
    fontSize: 14,
    color: "#374151",
    marginTop: 2,
  },

  amount: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "600",
    color: "#111827",
  },

  status: {
    marginTop: 6,
    fontSize: 13,
    fontWeight: "600",
    color: "#9CA3AF",
  },

  statusPaid: { color: "#16a34a" },
  statusPending: { color: "#f59e0b" },
  statusCancelled: { color: "#dc2626" },
});
