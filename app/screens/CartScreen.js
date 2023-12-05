import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import colors from "../config/colors";

const CartScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.dark,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          marginVertical: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: colors.white }}>Kamil Ozcan</Text>
        <Text style={{ color: colors.white }}>Cart Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;
