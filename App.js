import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import colors from "./app/config/colors";
import { HomeScreen } from "./app/screens/HomeScreen";
import CoffeeDetailsScreen from "./app/screens/CoffeeDetailsScreen";
import coffees from "./app/config/coffees";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.dark }}>
      <CoffeeDetailsScreen coffee={coffees[5]} />
      {/* <HomeScreen /> */}
    </View>
  );
}

const styles = StyleSheet.create({});
