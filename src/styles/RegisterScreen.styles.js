import { StyleSheet, Dimensions } from "react-native";

const screenHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#379451", 
    justifyContent: "center",
    paddingHorizontal: 15,
    paddingTop: 60,
  },
  topTextContainer: {
  position: "absolute",
  top: 40,
  left: 0,
  right: 0,
  alignItems: "center",
},

registerTitle: {
  fontSize: 20,
  fontWeight: "600",
  color: "#fff",
  textAlign: "center",
},


  whiteBox: {
    height: screenHeight * 0.87, 
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 30,
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 20,
  },

  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",

  },

  input: {
    height: 48,
    backgroundColor: "#ffffffff",
    borderRadius: 10,
    paddingHorizontal: 14,
    fontSize: 15,
    marginBottom: 20,
    borderWidth: 1.5,
    borderColor: "#D9D9D9",
  },

  registerButton: {
    width: "100%",
    height: 48,
    backgroundColor: "#006C38",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  registerText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },

  loginRedirect: {
    marginTop: 15,
    alignSelf: "center",
  },

  redirectText: {
    fontSize: 15,
    color: "#333",
  },

  redirectBold: {
    fontWeight: "700",
    color: "#333",
  },
});
