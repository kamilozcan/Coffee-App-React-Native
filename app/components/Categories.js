import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from "react-native";
import React, { useState } from "react";

import colors from "../config/colors";
import categories from "../config/categories";

const Categories = () => {
  const [activeCategoryId, setActiveCategoryId] = useState(null);

  const handlePress = (id) => {
    setActiveCategoryId(id);
  };

  return (
    <FlatList
      horizontal={true}
      data={categories}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ marginVertical: 10 }}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => handlePress(item.id)}
          style={{ marginRight: 20, alignItems: "center" }}
        >
          <Text
            style={[
              { color: colors.secondary, fontSize: 20 },
              activeCategoryId === item.id && { color: colors.primary },
            ]}
          >
            {item.name}
          </Text>
          {activeCategoryId === item.id && (
            <View
              style={{
                height: 10,
                width: 10,
                backgroundColor: colors.primary,
                borderRadius: 5,
                marginTop: 5,
              }}
            />
          )}
        </TouchableOpacity>
      )}
    />
  );
};

export default Categories;

const styles = StyleSheet.create({});
