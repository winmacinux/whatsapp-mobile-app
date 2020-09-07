import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  PixelRatio,
  ImageBackground,
} from "react-native";
import { TextInput, ScrollView } from "react-native-gesture-handler";
import AntIcon from "react-native-vector-icons/AntDesign";
import { useTheme } from "@react-navigation/native";
import UserMessage from "../components/UserMessage";
import MyMessage from "../components/MyMessage";

const backgroundImage =
  "https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png";

export default function PrivateRoom({ navigation }) {
  const [message, setMessage] = React.useState("Enter Value");
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.background}>
        <View style={styles.chatArea}>
          <ScrollView
            style={{
              height: 600,
            }}
            contentContainerStyle={{
              justifyContent: "flex-end",
            }}
          >
            {[...Array(4)].map((o) => (
              <React.Fragment>
                <UserMessage
                  data={{
                    text:
                      "Tera Saath hai Toh mujhe kya kami hai \
                Teri har muskan se mili mujhe kushi hai \
                Muskuraate Rehna isi Tarah humesha \
                Kyonki teri is muskan mein meri jaan basi hai",
                  }}
                />
                <MyMessage
                  data={{
                    text:
                      "Tera Saath hai Toh mujhe kya kami hai \
                Teri har muskan se mili mujhe kushi hai \
                Muskuraate Rehna isi Tarah humesha \
                Kyonki teri is muskan mein meri jaan basi hai",
                  }}
                />
              </React.Fragment>
            ))}
          </ScrollView>
        </View>
        <View style={styles.bottomBar}>
          <View style={styles.messageBoxPaper}>
            <TextInput
              multiline
              numberOfLines={4}
              onChangeText={(text) => setMessage(text)}
              value={message}
              editable
              maxLength={40}
              style={styles.messageBox}
              blurOnSubmit
              clearButtonMode
            />
          </View>
          <View style={styles.sendButtonPaper}>
            <Button title="Send" buttonStyle={styles.sendButton} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  chatArea: {
    flex: 9,
    flexDirection: "row",
    backgroundColor: "transparent",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  bottomBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "transparent",
    justifyContent: "center",
  },
  messageBoxPaper: {
    flex: 9,
    padding: 5,
    position: "relative",
  },
  sendButtonPaper: {
    flex: 1,
    height: 40,
    padding: 5,
  },
  messageBox: {
    width: "100%",
    height: 50,
    minHeight: 50,
    backgroundColor: "#ffffff",
    padding: 7,
    borderRadius: 25,
  },
  messageBoxIconRight: {
    position: "absolute",
    right: 10,
    top: "30%",
    color: "gray",
  },
  sendButton: {
    borderRadius: 50,
    height: 40,
    width: 40,
  },
});
