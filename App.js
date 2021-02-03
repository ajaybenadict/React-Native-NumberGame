import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import StartNumbering from "./screens/StartNumbering";

export default function App() {
  return (
    <View style={styles.container}>
      <Header title={"Guess a number"} />

      <StartGameScreen />

      <StartNumbering />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
