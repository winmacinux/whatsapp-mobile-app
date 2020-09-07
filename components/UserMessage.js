import React from "react";
import { View, Text, StyleSheet } from "react-native";

const UserMessage = React.memo(({ data }) => {
  return (
    <View style={styles.container}>
      <Text>{data.text}</Text>
    </View>
  );
});

export default UserMessage;

const styles = StyleSheet.create({
  container: {
    width: "50%",
    padding: 7,
    margin: 7,
    borderRadius: 5,
    backgroundColor: "lightgreen",
    alignSelf: "flex-start",
  },
});
