import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LoadingPlaceholder from "./LoadingPlaceholder";

export default function App() {
  return (
    <View style={styles.container}>
      <LoadingPlaceholder
        blurhash="LGFFaXYk^6#M@-5c,1J5@[or[Q6."
        style={{ width: 300, height: 300 }}
      />
      <Text style={{ textAlign: "center", marginHorizontal: 20, marginTop: 15 }}>
        Notice the above Blurhash works in a standalone app built with EAS
        Build, but not in Expo Go or a standalone app built with Turtle.
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
