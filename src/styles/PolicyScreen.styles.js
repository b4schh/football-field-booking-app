import { StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingTop: (StatusBar.currentHeight || 24) + 100,
    paddingBottom: 40,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#239969",
    marginBottom: 20,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1F2937",
    marginTop: 16,
    marginBottom: 6,
  },

  paragraph: {
    fontSize: 14,
    color: "#4B5563",
    lineHeight: 22,
  },
});
