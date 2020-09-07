import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Status({ navigation }) {
  return (
    <View style={styles.noMessage}>
      <Image
        source={require("../assets/status.png")}
        style={styles.noMessageIcon}
      ></Image>
      <Text style={styles.noMessageText}>No Status</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  noMessage: {
    flex: 1,
    alignItems: "center",
    alignContent: "stretch",
    justifyContent: "center",
  },
  noMessageIcon: {
    width: 49,
    height: 49,
    marginBottom: 10,
  },
  noMessageText: {
    fontWeight: "500",
    fontSize: 16,
    color: "gray",
  },
});
