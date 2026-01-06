import { StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingTop: (StatusBar.currentHeight || 24) + 100,
  },

  /* ===== TITLE ===== */
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#239969",
    marginBottom: 20,
  },

  /* ===== SECURITY INFO BOX ===== */
  securityBox: {
    backgroundColor: "#F9FAFB",
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  securityText: {
    fontSize: 14,
    color: "#4B5563",
    lineHeight: 20,
  },

  /* ===== SECTION ===== */
  sectionTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 10,
  },

  /* ===== INPUT ===== */
  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 14,
    fontSize: 15,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    marginBottom: 18,
    color: "#111827",
  },

  /* ===== BUTTON ===== */
  submitButton: {
    backgroundColor: "#239969",
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 12,
  },

  submitText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },
});
