import React, { useState, useRef, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Alert,
  FlatList,
  Dimensions,
  ScrollView,
} from "react-native";
import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";
import MainButton from "../components/MainButton";
import { Ionicons } from "@expo/vector-icons";
import BodyText from "../components/BodyText";

const renderItemList = (listLength, itemData) => (
  <View style={styles.listItem}>
    <BodyText>#{listLength - itemData.index}</BodyText>
    <BodyText>{itemData.item}</BodyText>
  </View>
);

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
};
const GameScreen = (props) => {
  const initialGuess = generateRandomBetween(1, 100, props.userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [pastGuesses, setPastGuesses] = useState([initialGuess.toString()]);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);
  const [availableHeight, setAvailableHeight] = useState(
    Dimensions.get("window").height
  );

  useEffect(() => {
    const updateLayout = () => {
      setAvailableHeight(Dimensions.get("window").height);
    };
    Dimensions.addEventListener("change", updateLayout);
    return () => {
      Dimensions.removeEventListener("change", updateLayout);
    };
  });

  const { userChoice, onGameOver } = props;
  useEffect(() => {
    if (currentGuess === props.userChoice) {
      props.onGameOver(pastGuesses);
    }
  }, [currentGuess, userChoice, onGameOver]);
  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < props.userChoice) ||
      (direction === "greater" && currentGuess > props.userChoice)
    ) {
      Alert.alert("Wrong Hint", "The Hint that you given is wrong", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess + 1;
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);

    //setRounds((curRound) => curRound + 1)
    setPastGuesses((curPastGuess) => [nextNumber.toString(), ...curPastGuess]);
  };

  if (availableHeight < 500) {
    return (
      <View style={styles.textContainer}>
        <Text>Opponent's Guess</Text>
        <View style={styles.controls}>
          <MainButton
            style={styles.button}
            onPress={nextGuessHandler.bind(this, "lower")}
          >
            <Ionicons name="md-remove" size={24} color="white" />
          </MainButton>

          <NumberContainer>{currentGuess}</NumberContainer>

          <MainButton
            style={styles.button}
            onPress={nextGuessHandler.bind(this, "greater")}
          >
            <Ionicons name="md-add" size={24} color="white" />
          </MainButton>
        </View>

        <View style={styles.listContainer}>
          {/* <ScrollView contentContainerStyle={styles.list}>
          {pastGuesses.map((guess, index) =>
            renderItemList(guess, pastGuesses.length - index)
          )}
        </ScrollView> */}
          <FlatList
            contentContainerStyle={styles.list}
            keyExtractor={(item) => item}
            data={pastGuesses}
            renderItem={renderItemList.bind(this, pastGuesses.length)}
          />
        </View>
      </View>
    );
  }
  return (
    <View style={styles.textContainer}>
      <Card style={{ ...styles.CardContainer, height: availableHeight / 3 }}>
        <Text>Opponent's Guess</Text>
        <NumberContainer>
          <View>
            <Text>{currentGuess}</Text>
          </View>
        </NumberContainer>
        <View style={styles.buttonContainer}>
          <MainButton
            style={styles.button}
            onPress={nextGuessHandler.bind(this, "lower")}
          >
            <Ionicons name="md-remove" size={24} color="white" />
          </MainButton>

          <MainButton
            style={styles.button}
            onPress={nextGuessHandler.bind(this, "greater")}
          >
            <Ionicons name="md-add" size={24} color="white" />
          </MainButton>
        </View>
      </Card>
      <View style={styles.listContainer}>
        {/* <ScrollView contentContainerStyle={styles.list}>
          {pastGuesses.map((guess, index) =>
            renderItemList(guess, pastGuesses.length - index)
          )}
        </ScrollView> */}
        <FlatList
          contentContainerStyle={styles.list}
          keyExtractor={(item) => item}
          data={pastGuesses}
          renderItem={renderItemList.bind(this, pastGuesses.length)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  CardContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    borderRadius: 25,
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "80%",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: Dimensions.get("window").height > 600 ? 300 : 200,
    maxWidth: "90%",
  },
  listContainer: {
    flex: 1,
    width: "60%",
  },
  list: {
    flexGrow: 1,
    justifyContent: "flex-end",
  },
  listItem: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "black",
    padding: Dimensions.get("window").height > 600 ? 15 : 5,
    marginVertical: Dimensions.get("window").height > 600 ? 10 : 5,
    width: "100%",
    justifyContent: "space-around",
  },
});

export default GameScreen;
