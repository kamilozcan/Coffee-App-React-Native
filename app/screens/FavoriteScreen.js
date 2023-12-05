import { View, SafeAreaView, Text } from "react-native";
import React from "react";
import colors from "../config/colors";

const FavoriteScreen = () => {
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
        <Text style={{ color: colors.white }}>Favorite Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default FavoriteScreen;
