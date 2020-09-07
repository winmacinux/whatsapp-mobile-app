import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Button,
  ActivityIndicator,
} from "react-native";
import Countries from "../statics/countries";
import { TextInput } from "react-native-gesture-handler";
import { Picker } from "@react-native-community/picker";

export default function Login({ navigation }) {
  const [countryCode, setCountryCode] = useState("India");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const doVerification = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate("VerifyNumber", {
        phoneNumber: phoneNumber,
      });
    }, 2000);
  };

  return (
    <View style={styles.container}>
      {isLoading && (
        <ActivityIndicator size="large" color="#00ff00" style={styles.loader} />
      )}
      <View style={styles.card}>
        <Text
          style={{
            textAlign: "center",
          }}
        >
          NextApp will send an SMS message to verify your phone number. Enter
          your country code and phone number:
        </Text>
        <TextInput
          style={styles.phoneNumber}
          placeholder="- - - - - - - - - -"
          onChangeText={(text) => setPhoneNumber(text)}
          value={phoneNumber}
          dataDetectorTypes="phoneNumber"
          keyboardType="decimal-pad"
        />
        <Button
          title="Continue"
          style={styles.submitBtn}
          color="#25d366"
          onPress={doVerification}
        ></Button>
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
    justifyContent: "center",
    backgroundColor: "#ffffff",
    alignSelf: "stretch",
    textAlign: "center",
    padding: 10,
  },
  countryList: {
    height: 50,
    width: "80%",
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 0,
    borderBottomWidth: 1,
  },
  phoneNumber: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    // width: "80%",
    height: 50,
    padding: 10,
    borderWidth: 0,
    borderBottomWidth: 1,
    letterSpacing: 6,
    fontSize: 24,
    fontWeight: "700",
    color: "rgb(7, 94, 84)",
  },
  submitBtn: {
    height: 40,
  },
});
