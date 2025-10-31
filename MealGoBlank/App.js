import React from "react";
import { Text, View } from "react-native";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/themee/inde";
import RstorantScreen from "./src/component/features/Screen/RstorantScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import ProfileScreen from "./src/component/Tab/ProfileScreen";
import SettingsScreen from "./src/component/Tab/SettingsScreen";
import MapScreen from "./src/component/Tab/MapScreen";

const Tab = createBottomTabNavigator();



export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Restaurants"
          screenOptions={({ route }) => ({
            headerShown: false, // hide top header
            tabBarIcon: ({ color, size }) => {
              let iconName;

               if (route.name === "Restaurants") iconName = "restaurant";
              if (route.name === "Map") iconName = "map";
              if (route.name === "Settings") iconName = "settings";
              if (route.name === "Profile") iconName = "person";

              return <MaterialIcons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "#2182BD",
            tabBarInactiveTintColor: "gray",
          })}
        >
        <Tab.Screen name="Restaurants" component={RstorantScreen} />
          <Tab.Screen name="Map" component={MapScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
