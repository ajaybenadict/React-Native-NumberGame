import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

import Header from "./components/Header";
import GameOver from "./screens/GameOver";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const gameOverHandler = (numOfRounds) => {
    setGuessRounds(numOfRounds);
  };

  const startNewGameHandler = () => {
    setUserNumber("");
    setGuessRounds("");
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOver
        onOutput={userNumber}
        numOfGuesses={guessRounds}
        onNewGame={startNewGameHandler}
      />
    );
  }
  return (
    <View style={styles.container}>
      <Header title={"Guess a number"} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
