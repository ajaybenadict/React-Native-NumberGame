import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Colors from "./constants/Colors";

const NumberContainer = (props) => {
  return (
    <View style={styles.numberContainer}>
      <Text style={styles.textContainer}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  numberContainer: {
    borderWidth: 2,
    borderColor: Colors.accent,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    color: Colors.accent,
    fontSize: 22,
  },
});

export default NumberContainer;
