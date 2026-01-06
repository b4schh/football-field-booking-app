import { StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingTop: (StatusBar.currentHeight || 24) + 100,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#239969",
    marginBottom: 24,
  },

  formGroup: {
    marginBottom: 20,
  },

  label: {
    fontSize: 14,
    color: "#4B5563",
    marginBottom: 6,
    fontWeight: "500",
  },

  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 14,
    fontSize: 15,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    color: "#111827",
  },

  saveButton: {
    backgroundColor: "#239969",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 30,
  },

  saveText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },
});
