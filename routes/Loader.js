import React, { useEffect } from "react";
import { View, StyleSheet, Text, Image } from "react-native";

export default function Loader({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Login");
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <View></View>
      <View>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
      </View>
      <View>
        <Text style={styles.text1}>from</Text>
        <Text style={styles.text2}>FACEBOOK</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: { width: 120, height: 120 },
  text1: {
    color: "gray",
    textAlign: "center",
    marginBottom: 10,
    fontSize: 15,
  },
  text2: {
    color: "#25d366",
    textAlign: "center",
    fontSize: 18,
    marginBottom: 20,
    fontWeight: "600",
    letterSpacing: 4,
  },
});
