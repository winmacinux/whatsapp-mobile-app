import React from "react";
import Chats from "./Chats.js";
import Calls from "./Calls.js";
import Status from "./Status.js";
import Camera from "./Camera.js";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AntIcon from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import { useTheme } from "@react-navigation/native";
import { View, Text, PixelRatio, StyleSheet } from "react-native";

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const MainScreen = React.memo((props) => {
  const { colors } = useTheme();

  return (
    <React.Fragment>
      <View style={styles.topNav}>
        <View>
          <Text style={styles.mainTitle}>NextApp</Text>
        </View>
        <View style={styles.topSideNav}>
          <AntIcon
            name="search1"
            color="#ffffff"
            style={styles.sideNavIcon}
            size={PixelRatio.getPixelSizeForLayoutSize(10)}
          />
          <Entypo
            name="dots-three-vertical"
            color="#ffffff"
            style={styles.sideNavIcon}
            size={PixelRatio.getPixelSizeForLayoutSize(10)}
          />
        </View>
      </View>
      <Tab.Navigator
        initialRouteName="Chats"
        swipeEnabled
        tabBarOptions={{
          showIcon: true,
          labelStyle: { fontSize: 12 },
          style: {
            backgroundColor: colors.tabMenu,
            color: colors.tabMenuText,
          },
        }}
      >
        {/* <Tab.Screen
          name="Camera"
          component={Camera}
          options={{
            tabBarLabel: "",
            showLabel: false,
            tabBarIcon: ({ color }) => (
              <AntIcon
                name="camera"
                color="#fff"
                size={PixelRatio.getPixelSizeForLayoutSize(15)}
              />
            ),
          }}
        /> */}
        <Tab.Screen
          name="Chats"
          component={Chats}
          options={{
            title: (val) => <Text style={styles.tabTitle}>CHATS</Text>,
          }}
        />
        <Tab.Screen
          name="Status"
          component={Status}
          options={{
            title: (val) => <Text style={styles.tabTitle}>STATUS</Text>,
          }}
        />
        <Tab.Screen
          name="Calls"
          component={Calls}
          options={{
            title: (val) => <Text style={styles.tabTitle}>CALLS</Text>,
          }}
        />
      </Tab.Navigator>
    </React.Fragment>
  );
});

export default MainScreen;

const styles = StyleSheet.create({
  topNav: {
    height: 50,
    flexDirection: "row",
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgb(7, 94, 84)",
    padding: 5,
  },
  topSideNav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: "#ffffff",
  },
  tabTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#ffffff",
  },
  sideNavIcon: {
    marginLeft: 25,
  },
});
