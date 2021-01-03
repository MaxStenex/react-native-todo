import React, { useState } from "react";
import { StyleSheet, Text, Pressable, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

const filters = [
  {
    id: "0",
    value: "All",
    icon: <Ionicons name="ios-list-sharp" size={35} color="#9B70C8" />,
  },
  {
    id: "1",
    value: "Done",
    icon: <MaterialIcons name="done" size={35} color="black" />,
  },
  {
    id: "2",
    value: "In process",
    icon: <Fontisto name="stopwatch" size={30} color="black" />,
  },
];

const Header = () => {
  const [currentFilter, setCurrentFilter] = useState("All");
  const changeFilter = (item) => {
    setCurrentFilter(item.value);
  };

  const renderItem = ({ item }) => (
    <Pressable
      style={({ pressed }) => [
        item.value === currentFilter ? activeMenuItem : styles.menuItem,
        {
          backgroundColor: pressed && item.value !== currentFilter ? "#e1e1e1" : "white",
        },
      ]}
      onPress={() => changeFilter(item)}
    >
      {item.icon}
      <Text style={styles.itemText}>{item.value}</Text>
    </Pressable>
  );

  return (
    <FlatList
      data={filters}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={3}
    />
  );
};

export default Header;

const styles = StyleSheet.create({
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    flex: 1,
    height: "100%",
    backgroundColor: "#fafafa",
    borderWidth: 1,
    borderColor: "transparent",
    borderTopWidth: 0,
  },
  menuItemActive: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "black",
    borderTopWidth: 0,
  },
  itemText: {
    marginLeft: 7,
  },
});

const activeMenuItem = StyleSheet.compose(styles.menuItem, styles.menuItemActive);
