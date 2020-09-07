import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MyMessage = React.memo(({ data }) => {
  return (
    <View style={styles.container}>
      <Text>{data.text}</Text>
    </View>
  );
});

export default MyMessage;

const styles = StyleSheet.create({
  container: {
    width: "50%",
    padding: 7,
    margin: 7,
    borderRadius: 5,
    backgroundColor: "#ffffff",
    alignSelf: "flex-end",
  },
});
