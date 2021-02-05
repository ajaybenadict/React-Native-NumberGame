import React from "react";
import { Button, StyleSheet, View, Image, Text } from "react-native";
import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";
import TitleText from "../components/TitleText";
import BodyText from "../components/BodyText";
import Colors from "../components/constants/Colors";

const GameOver = (props) => {
  console.log(props.onOutput);
  return (
    <View style={styles.cardContainer}>
      <TitleText style={styles.titleContainer}>The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          //source={require("../assets/success.png")}
          source={{
            uri:
              "https://images.pexels.com/photos/6945/sunset-summer-golden-hour-paul-filitchkin.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.cardContainer}>
        <BodyText style={styles.textContainer}>
          Your number is{" "}
          <Text style={styles.resultContainer}>{props.onOutput}</Text> and, The
          Number of guesses taken is{" "}
          <Text style={styles.resultContainer}>{props.numOfGuesses}</Text>
        </BodyText>

        <View style={styles.buttonContainer}>
          <Button title="START A NEW GAME" onPress={props.onNewGame} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    fontSize: 18,
    marginVertical: 20,
  },
  textContainer: {
    fontSize: 18,
    padding: 10,
    marginVertical: 20,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: Colors.primary,
    overflow: "hidden",
    marginVertical: 20,
  },
  resultContainer: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },
});

export default GameOver;
