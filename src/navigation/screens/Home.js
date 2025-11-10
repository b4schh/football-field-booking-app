import { View, StyleSheet } from "react-native";
import { Text } from "@react-navigation/elements";

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> 36 mảnh đất quê cha </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 36
  }
});
