import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { View, Text } from "react-native";

import React from "react";
import ChatScrren from "../screens/ChatScreen";
import ChatsScrren from "../screens/ChatsScren";
import MainTabNavigator from "./MainTabNavigator";

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={MainTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Chat" component={ChatScrren} />
        <Stack.Screen name="Chats" component={ChatsScrren} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
