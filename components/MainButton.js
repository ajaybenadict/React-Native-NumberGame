import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "./constants/Colors";

const MainButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={{ ...styles.buttonContainer, ...props.style }}>
        <Text style={{ ...styles.textContainer, ...props.style }}>
          {props.children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: Colors.primary,
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 8,
  },
  textContainer: {
    fontFamily: "open-sans",
    fontSize: 15,
    color: "white",
    textAlign: "center",
  },
});
export default MainButton;
