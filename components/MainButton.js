import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import Colors from "./constants/Colors";

const MainButton = (props) => {
  let ButtonComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    ButtonComponent = TouchableNativeFeedback;
  }
  return (
    <View style={styles.buttonContainerWhole}>
      <ButtonComponent onPress={props.onPress}>
        <View style={{ ...styles.buttonContainer, ...props.style }}>
          <Text style={{ ...styles.textContainer, ...props.style }}>
            {props.children}
          </Text>
        </View>
      </ButtonComponent>
    </View>
  );
};
const styles = StyleSheet.create({
  buttonContainerWhole: {
    borderRadius: 8,
    overflow: "hidden",
  },
  buttonContainer: {
    flexDirection: "row",
    backgroundColor: Colors.primary,
    paddingVertical: Dimensions.get("window").height > 600 ? 15 : 8,
    paddingHorizontal: Dimensions.get("window").height > 600 ? 25 : 15,
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
