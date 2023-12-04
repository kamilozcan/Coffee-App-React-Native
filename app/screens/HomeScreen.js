import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";

import colors from "../config/colors";
import SearchField from "../components/SearchField";
import Categories from "../components/Categories";
import coffees from "../config/coffees";

const avatar = require("../../assets/avatar.png");

const { width } = Dimensions.get("window");

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
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {coffees.map((coffee) => (
            <View
              key={coffee.id}
              style={{
                width: width / 2 - 20,
                marginBottom: 10,
                borderRadius: 20,
                overflow: "hidden",
              }}
            >
              <BlurView
                tint="dark"
                intensity={95}
                style={{
                  padding: 10,
                }}
              >
                <TouchableOpacity
                  style={{
                    height: 150,
                    width: "100%",
                  }}
                >
                  <Image
                    source={coffee.image}
                    style={{ width: "100%", height: "100%", borderRadius: 20 }}
                  />
                  <View style={{ position: "absolute", right: 0 }}>
                    <BlurView
                      tint="dark"
                      intensity={70}
                      style={{
                        flexDirection: "row",
                        padding: 8,
                        borderBottomStartRadius: 30,
                        borderTopEndRadius: 20,
                        overflow: "hidden",
                      }}
                    >
                      <Ionicons
                        style={{
                          marginLeft: 5,
                        }}
                        name="star"
                        color={colors.primary}
                        size={18}
                      />
                      <Text
                        style={{
                          color: colors.white,
                          marginLeft: 5,
                        }}
                      >
                        {coffee.rating}
                      </Text>
                    </BlurView>
                  </View>
                </TouchableOpacity>
                <Text
                  numberOfLines={2}
                  style={{
                    color: colors.white,
                    fontWeight: 600,
                    fontSize: 18,
                    marginTop: 10,
                    marginBottom: 5,
                  }}
                >
                  {coffee.name}
                </Text>
                <Text
                  numberOfLines={1}
                  style={{ color: colors.secondary, fontSize: 12 }}
                >
                  {coffee.included}
                </Text>
                <View
                  style={{
                    marginVertical: 5,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <View>
                    <Text
                      style={{
                        color: colors.white,
                        fontSize: 16,
                        fontWeight: 600,
                      }}
                    >
                      ${coffee.price}
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={{
                      backgroundColor: colors.primary,
                      padding: 5,
                      borderRadius: 10,
                    }}
                  >
                    <Ionicons name="add" size={16} color={colors.white} />
                  </TouchableOpacity>
                </View>
              </BlurView>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
