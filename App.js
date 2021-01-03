import React from "react";
import { StatusBar, View } from "react-native";

import { Header } from "./src/components";

const App = () => {
  return (
    <View>
      <StatusBar backgroundColor="#9B70C8" />
      <Header />
    </View>
  );
};

export default App;
