import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },

  header: {
    height: 149,
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: "#239969",
    alignItems: "center",
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },

  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },

  content: {
    padding: 16,
  },

  emptyText: {
    marginTop: 40,
    textAlign: "center",
    color: "#6B7280",
    fontSize: 15,
  },
});
