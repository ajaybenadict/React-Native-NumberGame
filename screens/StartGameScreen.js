import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Card from "../components/Card";
import Colors from "../components/constants/Colors";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import MainButton from "../components/MainButton";

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState("");

  const resetHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
    Keyboard.dismiss();
  };
  const confirmHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (chosenNumber > 99 || chosenNumber <= 0 || isNaN(chosenNumber)) {
      Alert.alert(
        "Invalid Number!",
        "Selection has to be a number between 1 and 99",
        [{ text: "okay", style: "destructive", onPress: resetHandler }]
      );
      return;
    }
    setConfirmed(true);
    setEnteredValue("");
    setSelectedNumber(chosenNumber);
    Keyboard.dismiss();
  };
  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.selectedContainer}>
        <TitleText style={styles.textContainer}>Your Selected Number</TitleText>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <MainButton onPress={() => props.onStartGame(selectedNumber)}>
          START THE GAME
        </MainButton>
      </Card>
    );
  }

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <BodyText> Start a New Game</BodyText>
        <Card style={styles.inputContainer}>
          <TitleText style={styles.textContainer}>Select a Number</TitleText>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="numeric"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <MainButton style={styles.button} onPress={resetHandler}>
              Reset
            </MainButton>

            <MainButton style={styles.button} onPress={confirmHandler}>
              Confirm
            </MainButton>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    padding: 10,
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
  },
  button: {
    width: "100%",
  },
  input: {
    width: 50,
    textAlign: "center",
  },
  selectedContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  textContainer: {
    fontSize: 18,
  },
});
export default StartGameScreen;
