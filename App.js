import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import colors from "./app/config/colors";
import { HomeScreen } from "./app/screens/HomeScreen";
import CartScreen from "./app/screens/CartScreen";
import FavoriteScreen from "./app/screens/FavoriteScreen";
import OrderHistoryScreen from "./app/screens/OrderHistoryScreen";
import CoffeeDetailsScreen from "./app/screens/CoffeeDetailsScreen";
import coffees from "./app/config/coffees";
import TabNavigator from "./app/navigators/TabNavigator";
import AppNavigator from "./app/navigators/AppNavigator";

const Stack = createStackNavigator();

export default function App() {
  return (
    <AppNavigator />
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name="Tab"
    //       component={TabNavigator}
    //       options={{ headerShown: false }}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
