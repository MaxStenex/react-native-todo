import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import "react-native-get-random-values";

import { Header, TodoList, Footer } from "./src/components";

const App = () => {
  return (
    <View style={styles.container}>
      <View>
        <StatusBar backgroundColor="#9B70C8" />
        <Header />
      </View>
      <TodoList />
      <Footer />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flex: 1,
  },
});
