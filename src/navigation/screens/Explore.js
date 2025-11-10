import { Text } from "@react-navigation/elements";
import { View, StyleSheet } from "react-native";

export function Explore() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Thật thà thì ít quỷ ma thì nhiều </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 36
  }
});
