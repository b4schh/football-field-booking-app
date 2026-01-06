import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  /* --- TOP IMAGE 20% --- */
  topImageContainer: {
    height: "25%",
    width: "100%",
  },
  topImage: {
    width: "100%",
    height: "100%",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },

  backButton: {
    position: "absolute",
    top: 40,
    left: 16,
    width: 32,
    height: 32,
    backgroundColor: "#ffffffff",
    borderRadius: 18,
    justifyContent: "center", // căn giữa dọc
    alignItems: "center",     // căn giữa ngang
  },

  heartButton: {
    position: "absolute",
    top: 40,
    right: 100,
    width: 32,
    height: 32,
    backgroundColor: "#ffffffff",
    borderRadius: 18,
    justifyContent: "center", // căn giữa dọc
    alignItems: "center",     // căn giữa ngang
  },

  bookingButton: {
    position: "absolute",
    top: 40,
    right: 16,
    width: 79,
    height: 32,
    backgroundColor: "#27ae60",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },

  bookingText: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
  },

  /* --- INFO BOX OVERLAY --- */
  infoBox: {
  backgroundColor: "#fff",
  marginHorizontal: 16,
  marginTop: -100,
  padding: 16,
  borderRadius: 16,
  elevation: 4,
  shadowColor: "#000",
  shadowOpacity: 0.08,
  shadowRadius: 6,
  shadowOffset: { width: 0, height: 3 },
},

complexName: {
  fontSize: 20,
  fontWeight: "700",
  color: "#222",
  marginBottom: 8,
},

infoText: {
  fontSize: 14,
  color: "#555",
  lineHeight: 20,
},

divider: {
  height: 1,
  backgroundColor: "#eee",
  marginVertical: 12,
},

infoInline: {
  flexDirection: "row",
  justifyContent: "space-between",
  marginBottom: 6,
},

infoLabel: {
  fontSize: 14,
  color: "#888",
},

infoValue: {
  fontSize: 14,
  color: "#333",
  fontWeight: "500",
},

  /* --- TABS --- */
  tabContainer: {
    marginTop: 30,
    flex: 1,
  },

  tabHeader: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: "#e0e0e0",
  },

  tabItem: {
    fontSize: 16,
    fontWeight: "500",
    color: "#666",
  },

  activeTab: {
    color: "#27ae60",
    borderBottomWidth: 2,
    borderColor: "#27ae60",
    paddingBottom: 6,
  },

  tabContent: {
    padding: 16,
  },

  iconPlaceholder: {
    width: "100%",
    height: "100%",
  },

  descriptionContainer: {
    padding: 15,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  descriptionBox: {
    backgroundColor: "#f5f5f5",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  descriptionText: {
    fontSize: 14,
    lineHeight: 20,
    color: "#333",
  },

  reviewCard: {
  backgroundColor: "#fff",
  borderRadius: 12,
  padding: 12,
  marginBottom: 12,
  shadowColor: "#000",
  shadowOpacity: 0.08,
  shadowRadius: 6,
  elevation: 3,
},

reviewHeader: {
  flexDirection: "row",
  alignItems: "center",
  marginBottom: 6,
},

reviewAvatar: {
  width: 42,
  height: 42,
  borderRadius: 21,
  marginRight: 10,
},

reviewName: {
  fontWeight: "600",
  fontSize: 14,
},

reviewRole: {
  fontSize: 12,
  color: "#888",
},

reviewRating: {
  fontSize: 14,
  color: "#f5a623",
},

reviewComment: {
  marginTop: 6,
  fontSize: 14,
  color: "#333",
  lineHeight: 20,
},

reviewImage: {
  width: 80,
  height: 80,
  borderRadius: 8,
  marginRight: 8,
},

reviewDate: {
  marginTop: 6,
  fontSize: 11,
  color: "#999",
  textAlign: "right",
},

});
