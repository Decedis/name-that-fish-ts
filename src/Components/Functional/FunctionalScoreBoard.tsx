import { useState } from "react";
import "./styles/score-board.css";
import { TFishData } from "./FunctionalApp";

type TScoreProps = {
  fishData: TFishData[];
  guesses: string[];
};
//  Where the score is presented

let incorrectCount = 0; //TODO this is a derived value
let correctCount = 0; //TODO this is a derived value

export function FunctionalScoreBoard({ fishData, guesses }: TScoreProps) {
  //const [guessCount, setGuessCount] = useState(0);

  const answersLeft = fishData.map((fish) => (
    <div key={fish.name} className="choice">
      {fish.name}
    </div>
  ));

  const index = guesses.length || 0;
  const countUpdate = () =>
    guesses[index] === fishData[index].name ? correctCount++ : incorrectCount++;
  countUpdate;

  console.log("fishData: ", fishData);
  console.log("guesses: ", guesses);
  console.log(`
    "GUESSES === FISHDATA.[GUESSCOUNT].NAME :::> ",
    Guess: => ${guesses[index]}
    fishData: => ${fishData[index]}
    ${guesses[index] === fishData[index].name}
    `);

  return (
    <div id="score-board">
      <div>Incorrect 🔻: {incorrectCount}</div>
      <div id="choices-left">{answersLeft}</div>
      <div>Correct ✅: {correctCount}</div>
    </div>
  );
}
