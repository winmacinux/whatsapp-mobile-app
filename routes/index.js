import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AppearanceProvider, useColorScheme } from "react-native-appearance";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  useTheme,
} from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { View, Text, PixelRatio, StyleSheet } from "react-native";
import MainScreen from "./MainScreen";
import PrivateRoom from "./PrivateRoom";
import { color } from "react-native-reanimated";
import Loader from "./Loader";
import Login from "./Login";
import VerifyNumber from "./VerifyNumber";
import ProfileUpdate from "./ProfileUpdate";

const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    tabMenu: "rgb(7, 94, 84)",
    tabMenuText: "#ffffff",
  },
};

const Routes = ({ navigation }) => {
  const scheme = useColorScheme();
  //   const { colors } = useTheme();

  return (
    <AppearanceProvider>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerStyle: {
              backgroundColor: MyTheme.colors.tabMenu,
              color: MyTheme.colors.tabMenuText,
            },
            headerTintColor: "#ffffff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
          <Stack.Screen
            name="MainScreen"
            component={MainScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="PrivateRoom" component={PrivateRoom} />
          <Stack.Screen
            name="Loader"
            component={Loader}
            options={{ headerShown: false, title: "NextApp" }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              title: "NextApp",
              headerTitle: "Verify your phone number",
            }}
          />
          <Stack.Screen
            name="VerifyNumber"
            component={VerifyNumber}
            options={{
              headerShown: false,
              headerTitle: "Verify your phone number",
            }}
          />
          <Stack.Screen
            name="ProfileUpdate"
            component={ProfileUpdate}
            options={{
              headerShown: false,
              headerTitle: "Profile Settings",
            }}
          />
        </Stack.Navigator>
        <StatusBar hidden={false} />
      </NavigationContainer>
    </AppearanceProvider>
  );
};
export default Routes;

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
