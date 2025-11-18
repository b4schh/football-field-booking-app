import { StyleSheet, Dimensions } from "react-native";

const screenHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#379451",
    justifyContent: "flex-end",
    paddingTop: 60,
  },

  topTexts: {
    position: "absolute",
    top: 100,
    left: 24,
  },

  welcomeText: {
    fontSize: 32,
    fontWeight: "800",
    color: "#fff",
  },

  loginTitle: {
    fontSize: 22,
    fontWeight: "600",
    color: "#e9f9ef",
    marginTop: 4,
  },

  whiteBox: {
    height: screenHeight * 0.7,
    width: "100%",
    backgroundColor: "#F7F9FA",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 20,
    justifyContent: "space-between", // ⭐ form phía trên, đăng ký sát đáy
  },

  formContainer: {
    flex: 1,
    justifyContent: "flex-start",
  },

  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    color: "#333",
  },

  input: {
    height: 48,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    paddingHorizontal: 14,
    fontSize: 15,
    marginBottom: 20,
    borderWidth: 1.5,
    borderColor: "#D9D9D9",
  },

  loginButton: {
    width: "100%", // full width trong padding của whiteBox
    height: 48,
    backgroundColor: "#006C38",
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  loginText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },

  signupContainer: {
    alignSelf: "center",
  },

  signupText: {
    fontSize: 15,
    color: "#333",
  },

  signupBold: {
    fontWeight: "700",
    color: "#333",
  },
});
