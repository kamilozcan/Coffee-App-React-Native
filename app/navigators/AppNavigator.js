import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { HomeScreen } from "../screens/HomeScreen";
import CoffeeDetailsScreen from "../screens/CoffeeDetailsScreen";
import CartScreen from "../screens/CartScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import OrderHistoryScreen from "../screens/OrderHistoryScreen";
import TabNavigator from "./TabNavigator";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Tab"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Tab" component={TabNavigator} />
        <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
        <Stack.Screen
          name="CoffeeDetails"
          component={CoffeeDetailsScreen}
        ></Stack.Screen>
        <Stack.Screen name="Cart" component={CartScreen}></Stack.Screen>
        <Stack.Screen name="Favorite" component={FavoriteScreen}></Stack.Screen>
        <Stack.Screen
          name="History"
          component={OrderHistoryScreen}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
