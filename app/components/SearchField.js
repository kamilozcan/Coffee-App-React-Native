import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";

import colors from "../config/colors";

const SearchField = () => {
  return (
    <View
      style={{
        borderRadius: 10,
        overflow: "hidden",
      }}
    >
      <BlurView
        intensity={30}
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextInput
          style={{
            width: "100%",
            color: colors.white,
            fontSize: 18,
            padding: 10,
            paddingLeft: 35,
          }}
          placeholder="Find Your Coffee..."
          placeholderTextColor={colors.light}
        />
        <Ionicons
          style={{
            position: "absolute",
            left: 5,
          }}
          name="search"
          color={colors.light}
          size={20}
        />
      </BlurView>
    </View>
  );
};

export default SearchField;

const styles = StyleSheet.create({});
