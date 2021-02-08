import React from "react";
import {
  Button,
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  Dimensions,
} from "react-native";

import TitleText from "../components/TitleText";
import BodyText from "../components/BodyText";
import Colors from "../components/constants/Colors";

const renderItemList = (value, numOfRounds) => (
  <View key={value} style={styles.listItem}>
    <BodyText>#{numOfRounds}</BodyText>
    <BodyText>{value}</BodyText>
  </View>
);

const GameOver = (props) => {
  // const onOutput = props;
  return (
    <ScrollView>
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
            <Text style={styles.resultContainer}>{props.onOutput}</Text> and,
            The Number of guesses taken is{" "}
            <Text style={styles.resultContainer}>{props.numOfGuesses}</Text>
          </BodyText>

          <View style={styles.buttonContainer}>
            <Button title="START A NEW GAME" onPress={props.onNewGame} />
          </View>
        </View>

        <View style={styles.listContainer}>
          <ScrollView contentContainerStyle={styles.list}>
            <Text style={styles.textFinal}>
              Total Guesses made by your mobile
            </Text>
            {props.outputData.map((guess, index) =>
              renderItemList(guess, props.outputData.length - index)
            )}
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    fontSize: 18,
    marginVertical: Dimensions.get("window").height > 600 ? 20 : 5,
  },
  textContainer: {
    fontSize: 18,
    padding: 10,
    marginVertical: Dimensions.get("window").height > 600 ? 20 : 5,
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
    marginVertical: Dimensions.get("window").height > 600 ? 20 : 5,
  },
  resultContainer: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },
  listItem: {
    flexDirection: "row",
    padding: Dimensions.get("window").height > 600 ? 10 : 4,
    marginVertical: Dimensions.get("window").height > 600 ? 10 : 5,
    width: "70%",
    justifyContent: "space-around",
    borderColor: "black",
    borderRadius: 1,
    borderWidth: 1,
  },
  textFinal: {
    fontFamily: "open-sans-bold",
    marginVertical: 10,
  },
  listContainer: {
    flex: 1,
    width: "80%",
    marginVertical: 5,
  },
  list: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
});

export default GameOver;
