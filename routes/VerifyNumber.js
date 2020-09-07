import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Button,
  ActivityIndicator,
} from "react-native";
import { Picker } from "@react-native-community/picker";
import Countries from "../statics/countries";
import { TextInput } from "react-native-gesture-handler";

export default function VerifyNumber({ navigation, route }) {
  const [verifyCode, setVerifyCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { phoneNumber } = route.params ? route.params : "";

  const doCodeVerification = () => {
    console.log("Verify COde", verifyCode);
    if (verifyCode.length === 6) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        navigation.navigate("ProfileUpdate");
      }, 3000);
    }
  };

  useEffect(() => {
    doCodeVerification();
  }, [verifyCode]);

  return (
    <View style={styles.container}>
      {isLoading && (
        <ActivityIndicator size="large" color="#00ff00" style={styles.loader} />
      )}
      <View style={styles.card}>
        <Text style={styles.title}>
          Verify your Mobile Number {phoneNumber}
        </Text>
        <TextInput
          style={styles.verifyCode}
          placeholder="- - - - - -"
          onChangeText={(text) => {
            setVerifyCode(text);
            doCodeVerification();
          }}
          value={verifyCode}
        />
        <Text>Enter 6-digit code</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    alignContent: "space-between",
  },
  loader: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    alignSelf: "stretch",
    position: "absolute",
    zIndex: 100,
    width: "100%",
    height: "100%",
  },
  card: {
    flex: 1,
    margin: 5,
    elevation: 1,
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    alignSelf: "stretch",
    paddingTop: 60,
  },
  verifyCode: {
    height: 40,
    width: 150,
    textAlign: "center",
    letterSpacing: 6,
    borderColor: "gray",
    borderWidth: 0,
    fontWeight: "700",
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    height: 50,
    padding: 10,
    borderWidth: 0,
    borderBottomWidth: 1,
  },
  title: {
    color: "#25d366",
    textAlign: "center",
    fontSize: 18,
    marginBottom: 20,
    fontWeight: "600",
  },
});
