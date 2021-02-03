import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Card from "../components/Card";

const StartNumbering = (props) => {
  return (
    <View style={styles.screen}>
      <Card style={styles.cards}>
        <Text>this is from start Numbering</Text>
      </Card>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
  },
  cards: {
    alignItems: "center",
    fontSize: 10,
    width: 300,
    maxWidth: "80%",
  },
});
export default StartNumbering;
