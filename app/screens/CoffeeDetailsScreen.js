import {
  Dimensions,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

import colors from "../config/colors";
import { BlurView } from "expo-blur";

const { height, width } = Dimensions.get("window");
const sizes = ["S", "M", "L"];

const CoffeeDetailsScreen = ({ coffee }) => {
  const [activeSize, setActiveSize] = useState(null);
  return (
    <>
      <ScrollView>
        <SafeAreaView>
          <ImageBackground
            source={coffee.image}
            style={{
              height: height / 2 + 20,
              justifyContent: "space-between",
            }}
            imageStyle={{
              borderRadius: 30,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 20,
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: colors.dark,
                  padding: 10,
                  borderRadius: 20,
                }}
              >
                <Ionicons name="arrow-back" color={colors.light} size={20} />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: colors.dark,
                  padding: 10,
                  borderRadius: 20,
                }}
              >
                <Ionicons name="heart" color={colors.light} size={20} />
              </TouchableOpacity>
            </View>
            <View
              style={{
                borderRadius: 30,
                overflow: "hidden",
              }}
            >
              <BlurView
                intensity={80}
                tint="dark"
                style={{
                  padding: 20,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text
                    style={{
                      fontSize: 20,
                      color: colors.white,
                      fontWeight: 600,
                      marginBottom: 10,
                    }}
                  >
                    {coffee.name}
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      color: colors["white-smoke"],
                      fontWeight: 500,
                      marginBottom: 10,
                    }}
                  >
                    {coffee.included}
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      marginTop: 10,
                    }}
                  >
                    <Ionicons name="star" size={16} color={colors.primary} />
                    <Text
                      style={{
                        color: colors.white,
                        marginLeft: 10,
                      }}
                    >
                      {coffee.rating}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    width: "30%",
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        padding: 5,
                        width: 50,
                        height: 50,
                        backgroundColor: colors.dark,
                        borderRadius: 10,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Ionicons name="cafe" size={16} color={colors.primary} />
                      <Text
                        style={{
                          color: colors["white-smoke"],
                          fontSize: 12,
                        }}
                      >
                        Coffee
                      </Text>
                    </View>
                    <View
                      style={{
                        padding: 5,
                        width: 50,
                        height: 50,
                        backgroundColor: colors.dark,
                        borderRadius: 10,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Ionicons name="water" size={16} color={colors.primary} />
                      <Text
                        style={{
                          color: colors["white-smoke"],
                          fontSize: 12,
                        }}
                      >
                        Milk
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      backgroundColor: colors.dark,
                      padding: 5,
                      borderRadius: 5,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        color: colors["white-smoke"],
                        fontSize: 12,
                      }}
                    >
                      Medium Roasted
                    </Text>
                  </View>
                </View>
              </BlurView>
            </View>
          </ImageBackground>
          <View
            style={{
              padding: 10,
            }}
          >
            <Text
              style={{
                color: colors["white-smoke"],
                fontSize: 20,
                fontWeight: 600,
                marginBottom: 10,
              }}
            >
              Description
            </Text>
            <Text
              numberOfLines={3}
              style={{
                color: colors.white,
              }}
            >
              {coffee.description}
            </Text>
            <View
              style={{
                marginVertical: 20,
              }}
            >
              <Text
                style={{
                  color: colors["white-smoke"],
                  fontSize: 20,
                  fontWeight: 600,
                  marginBottom: 10,
                }}
              >
                Size
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                {sizes.map((size, index) => (
                  <TouchableOpacity
                    onPress={() => setActiveSize(size)}
                    key={index}
                    style={[
                      {
                        borderWidth: 2,
                        paddingVertical: 5,
                        borderRadius: 10,
                        backgroundColor: colors["dark-light"],
                        width: width / 3 - 30,
                        justifyContent: "center",
                        alignItems: "center",
                      },
                      activeSize === size && {
                        borderColor: colors.primary,
                        backgroundColor: colors.dark,
                      },
                    ]}
                  >
                    <Text
                      style={[
                        {
                          color: colors["white-smoke"],
                          fontSize: 18,
                        },
                        activeSize === size && {
                          color: colors.primary,
                        },
                      ]}
                    >
                      {size}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
      <SafeAreaView
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            padding: 10,
            paddingLeft: 30,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: colors["white-smoke"], fontSize: 16 }}>
            Price
          </Text>
          <View>
            <Text
              style={{
                color: colors.white,
                fontSize: 20,
                fontWeight: 600,
              }}
            >
              ${coffee.price}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            marginRight: 10,
            backgroundColor: colors.primary,
            width: width / 2 + 30,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
          }}
        >
          <Text
            style={{
              color: colors.white,
              fontSize: 20,
              fontWeight: "600",
            }}
          >
            Buy Now
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default CoffeeDetailsScreen;
