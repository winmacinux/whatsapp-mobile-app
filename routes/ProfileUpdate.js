import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Button,
  ActivityIndicator,
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";

export default function ProfileUpdate({ navigation, route }) {
  const [photo, setPhoto] = useState(null);
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  getPermissionAsync = async () => {
    if (Platform.OS !== "web") {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };

  useEffect(async () => {
    await getPermissionAsync();
  }, []);

  const doCodeVerification = (text) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate("MainScreen");
    }, 1000);
  };

  _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        setPhoto(result.uri);
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };

  return (
    <View style={styles.container}>
      {isLoading && (
        <ActivityIndicator size="large" color="#00ff00" style={styles.loader} />
      )}
      <View style={styles.card}>
        <Text style={styles.title}>Profile Info</Text>
        <Text style={styles.text}>
          Please provide our name and an optional profile photo
        </Text>
        <TouchableOpacity onPress={_pickImage}>
          <Image
            style={styles.avatar}
            source={
              photo ? { uri: photo } : require("../assets/upload-profile.png")
            }
          />
        </TouchableOpacity>

        <TextInput
          style={styles.name}
          placeholder="Your Name"
          onChangeText={(text) => {
            setName(text);
          }}
          value={name}
        />
        <Button
          title="GET STARTED"
          color="#25d366"
          onPress={doCodeVerification}
        />
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
  name: {
    height: 40,
    borderColor: "gray",
    borderWidth: 0,
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 20,
    width: "80%",
    height: 50,
    padding: 10,
  },
  title: {
    color: "#25d366",
    textAlign: "center",
    fontSize: 18,
    marginBottom: 20,
    fontWeight: "600",
  },
  text: {
    color: "gray",
    marginBottom: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 150,
    marginBottom: 30,
  },
});
