import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  /* HEADER */
  header: {
    width: "100%",
    backgroundColor: "#239969",
    justifyContent: "center",
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
  },

  headerTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },

  iconButton: {
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
  },

  iconImage: {
    width: 16,
    height: 16,
  },

  rightPlaceholder: {
    width: 36,
  },

  /* CONTENT — ⚠️ ĐÃ SỬA */
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },

  text: {
    fontSize: 16,
    color: "#111827",
  },

  /* DATE PICKER */
  blurContainer: {
    borderRadius: 14,
    overflow: "hidden",
    marginTop: 10,
    marginLeft: 16,
    alignSelf: "flex-start",
  },

  blurView: {
    width: "100%",
  },

  datePickerButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },

  dateText: {
    fontSize: 13,
    fontWeight: "500",
    color: "#111827",
  },

    /* SCROLL CONTENT */
  scrollContent: {
    paddingBottom: 24,
  },

  /* FIELD CHILD */
  fieldChildBox: {
    marginBottom: 20,
    backgroundColor: "#F9FAFB",
    borderRadius: 10,
    padding: 12,
  },

  fieldChildTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#065F46",
    marginBottom: 8,
  },

  /* SLOT */
  slotContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },

  slotItem: {
    width: "48%",
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 8,
    backgroundColor: "#ECFDF5",
    borderWidth: 1,
    borderColor: "#A7F3D0",
  },

  slotSelected: {
    backgroundColor: "#059669",
    borderColor: "#047857",
  },

  slotDisabled: {
    backgroundColor: "#E5E7EB",
    borderColor: "#D1D5DB",
  },

  slotText: {
    fontSize: 13,
    fontWeight: "500",
    color: "#064E3B",
    textAlign: "center",
  },

  slotTextSelected: {
    color: "#fff",
  },

  priceText: {
    fontSize: 12,
    color: "#065F46",
    textAlign: "center",
    marginTop: 2,
  },

  headerSubtitle: {
  fontSize: 12,
  color: "#ffee07ff",
},

/* HEADER TITLE CONTAINER */
headerTitleContainer: {
  flex: 1,
  alignItems: "center",
},

headerSubtitle: {
  fontSize: 13,
  color: "#D1FAE5",
  marginTop: 2,
},

weekText: {
  fontSize: 12,
  color: "#ECFDF5",
  marginTop: 2,
},

/* WEEK NAVIGATION */
weekNav: {
  flexDirection: "row",
  justifyContent: "space-between",
  paddingHorizontal: 24,
  marginTop: 10,
},

weekNavText: {
  fontSize: 13,
  fontWeight: "600",
  color: "#ECFDF5",
},

doneButtonContainer: {
    padding: 10,
    backgroundColor: "#eee",
    alignItems: "center",
    borderRadius: 8,
    marginBottom: 5,
  },

  doneButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#239969",
  },

  backButton: {
  color: "#fff",
  fontSize: 20,
  fontWeight: "600",
},
});
