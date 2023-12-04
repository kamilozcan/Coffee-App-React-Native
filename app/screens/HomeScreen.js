import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";

import colors from "../config/colors";
import SearchField from "../components/SearchField";
import Categories from "../components/Categories";

const avatar = require("../../assets/avatar.png");

export const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView
        style={{
          padding: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            style={{
              borderRadius: 10,
              overflow: "hidden",
              width: 40,
              height: 40,
            }}
          >
            <BlurView
              style={{
                height: "100%",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <Ionicons name="menu" size={40} color={colors.secondary} />
            </BlurView>
          </TouchableOpacity>
          <View
            style={{
              width: 40,
              height: 40,
              overflow: "hidden",
              borderRadius: 10,
            }}
          >
            <BlurView
              style={{
                height: "100%",
                padding: 5,
              }}
            >
              <Image
                style={{ height: "100%", width: "100%", borderRadius: 10 }}
                source={avatar}
              />
            </BlurView>
          </View>
        </View>
        <View style={{ width: "80%", marginVertical: 30 }}>
          <Text
            style={{
              color: colors.white,
              fontSize: 35,
              fontWeight: 600,
            }}
          >
            Find the best coffee for you
          </Text>
        </View>
        <SearchField />
        <Categories />
      </ScrollView>
    </SafeAreaView>
  );
};
