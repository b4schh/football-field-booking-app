import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    paddingVertical: 20,
    backgroundColor: "#F7FAF8",
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 40,
    marginLeft: 20,
    color: '#239969',
  },

  profileContainer: {
    alignItems: "center",
    marginVertical: 20,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 10,
  },

  username: {
    fontSize: 16,
    fontWeight: "600",
  },

  sectionTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#6B7280",
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 20,
  },

  buttonRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },

  icon: {
    width: 22,
    height: 22,
    marginRight: 12,
    resizeMode: "contain",
  },

  buttonText: {
    fontSize: 15,
    color: "#111827",
  },

  logoutButton: {
    marginTop: 30,
    marginHorizontal: 20,
    backgroundColor: "#239969",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },

  logoutText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  avatarWrapper: {
  width: 100,
  height: 100,
  borderRadius: 50,
  overflow: "hidden",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#e0e0e0",
  marginBottom: 12,
},
avatar: {
  width: 100,
  height: 100,
  borderRadius: 50,
},
avatarPlaceholder: {
  width: 100,
  height: 100,
  borderRadius: 50,
  backgroundColor: "#d1d5db",
  justifyContent: "center",
  alignItems: "center",
},
avatarPlus: {
  fontSize: 48,
  color: "#fff",
},
});
