import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";

const GameOver = (props) => {
  console.log(props.onOutput);
  return (
    <View>
      <Card style={styles.cardContainer}>
        <Text style={styles.textContainer}>
          The Game is Over! Your number is
        </Text>
        <NumberContainer>{props.onOutput}</NumberContainer>
        <Text style={styles.textContainer}>The Number of guesses taken is</Text>
        <NumberContainer>{props.numOfGuesses}</NumberContainer>
      </Card>
      <View style={styles.buttonContainer}>
        <Button title="START A NEW GAME" onPress={props.onNewGame} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    fontSize: 15,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});

export default GameOver;
