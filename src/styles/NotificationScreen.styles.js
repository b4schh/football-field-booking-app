import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f7", // nền nhẹ, dễ nhìn
  },

  // ===== HEADER =====
  header: {
    height: 150,
    paddingVertical: 25,
    paddingHorizontal: 20,
    backgroundColor: "#239969",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    elevation: 5,
  },
  headerTitle: {
    paddingTop: 20,
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },

  // ===== SCROLL CONTENT =====
  scrollContent: {
    padding: 15,
    paddingBottom: 30,
  },

  // ===== NOTIFICATION CARD =====
  notificationCard: {
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
    borderLeftWidth: 4,
    borderLeftColor: "#239969", // accent màu bên trái
  },
  notificationTitle: {
    fontSize: 17,
    fontWeight: "600",
    marginBottom: 6,
    color: "#222",
  },
  notificationBody: {
    fontSize: 14,
    color: "#555",
    lineHeight: 20,
    marginBottom: 8,
  },
  notificationTime: {
    fontSize: 12,
    color: "#999",
    textAlign: "right",
  },

  // ===== EMPTY STATE =====
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
  },
  emptyText: {
    fontSize: 16,
    color: "#999",
  },
});
