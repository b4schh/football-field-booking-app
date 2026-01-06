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
    fontSize: 22,
    fontWeight: "600",
  },

  headerTitle: {
    flex: 1,
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    marginRight: 22,
  },

  headerSubTitle: {
    marginTop: 8,
    color: "#E5F4EE",
    fontSize: 14,
    textAlign: "center",
  },

  // ===== INFO CARD =====
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

  infoText: {
    fontSize: 15,
    color: "#111827",
    marginBottom: 6,
    fontWeight: "500",
  },

  // ===== QR =====
  qrBox: {
    alignItems: "center",
    marginTop: 24,
  },

  qrImage: {
    width: 220,
    height: 220,
    borderRadius: 12,
    marginBottom: 12,
  },

  amount: {
    fontSize: 18,
    fontWeight: "700",
    color: "#DC2626",
  },

  // ===== COUNTDOWN =====
  timerBox: {
    marginTop: 24,
    alignItems: "center",
  },

  timerText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#F97316",
  },

  confirmButton: {
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

confirmButtonText: {
  color: "#fff",
  fontSize: 16,
  fontWeight: "700",
},

});
