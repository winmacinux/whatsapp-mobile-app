import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Pressable,
  Image,
  Button,
  ActivityIndicator,
} from "react-native";
import { useScrollToTop } from "@react-navigation/native";
import { TouchableHighlight } from "react-native-gesture-handler";

const chats = [
  {
    id: 1,
    name: "Ravi Sharma",
    lastMessage: "Tera yar hoon main..",
    timestamp: "8:19 AM",
    unreadCounts: 0,
    avatar:
      "https://static.toiimg.com/thumb/msid-71336384,width-800,height-600,resizemode-75,imgsize-32094/71336384.jpg",
  },
  {
    id: 2,
    name: "Vinay Solanki",
    lastMessage: "Why this kolaveri di..",
    timestamp: "8:19 AM",
    unreadCounts: 0,
    avatar:
      "https://static.toiimg.com/thumb/msid-71336384,width-800,height-600,resizemode-75,imgsize-32094/71336384.jpg",
  },
  {
    id: 3,
    name: "Ashutosh Kumar",
    lastMessage: "I won 10000 $ in a contest..",
    timestamp: "8:19 AM",
    unreadCounts: 0,
    avatar:
      "https://static.toiimg.com/thumb/msid-71336384,width-800,height-600,resizemode-75,imgsize-32094/71336384.jpg",
  },
  {
    id: 4,
    name: "Salman Khan",
    lastMessage: "That movie was awesome.",
    timestamp: "8:19 AM",
    unreadCounts: 0,
    avatar:
      "https://static.toiimg.com/thumb/msid-71336384,width-800,height-600,resizemode-75,imgsize-32094/71336384.jpg",
  },
];

const CustomItem = React.memo(({ navigation, data }) => {
  return (
    <TouchableHighlight onPress={() => navigation.navigate("PrivateRoom")}>
      <View style={styles.chatView}>
        <View style={styles.chatContentView}>
          <View style={styles.chatAvatarView}>
            <Image
              style={styles.avatar}
              source={{
                uri: data.avatar,
              }}
            />
          </View>
          <View style={styles.chatTextView}>
            <Text style={styles.chatContentTitle}>{data.name}</Text>
            <Text style={styles.chatContentText}>{data.lastMessage}</Text>
          </View>
        </View>
        <View style={styles.chatSecondaryView}>
          <Text style={styles.chatContentText}>{data.timestamp}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
});

export default function Chats({ navigation }) {
  const ref = React.useRef(null);
  const [selectedId, setSelectedId] = React.useState(null);
  useScrollToTop(ref);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";

    const onPressFunction = () => {};

    return <CustomItem data={item} navigation={navigation} />;
  };

  return (
    <View style={styles.noMessage}>
      <Image
        source={require("../assets/no-messages.png")}
        style={styles.noMessageIcon}
      ></Image>
      <Text style={styles.noMessageText}>No messages</Text>
    </View>
    // <ScrollView style={styles.container} ref={ref}>
    //   <FlatList
    //     data={chats}
    //     renderItem={renderItem}
    //     keyExtractor={(item) => item.id}
    //     extraData={selectedId}
    //   />
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  chatView: {
    minHeight: 50,
    flex: 1,
    flexDirection: "row",
  },
  chatAvatarView: {
    padding: 7,
  },
  chatContentView: {
    flex: 15,
    padding: 7,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  chatTextView: {
    justifyContent: "center",
  },
  chatSecondaryView: {
    flex: 4,
    padding: 7,
  },
  chatContentTitle: {
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 20,
  },
  chatContentText: {
    fontSize: 14,
    fontWeight: "500",
    color: "gray",
    lineHeight: 20,
  },
  avatar: {
    width: 49,
    height: 49,
    borderRadius: 50,
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
