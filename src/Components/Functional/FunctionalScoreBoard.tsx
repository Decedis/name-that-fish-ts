import { useState, useEffect } from "react";
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
  const [count, setCount] = useState(0);
  const [answers, setAnswers] = useState(fishData);

  useEffect(() => {
    if (guesses.length > 0) {
      setCount((prevVal: number) => {
        guesses[count] === fishData[count].name
          ? correctCount++
          : incorrectCount++;
        return prevVal + 1;
      });
    }
  }, [guesses]);

  const answersLeft = answers.map((fish) => {
    return (
      <div key={fish.name} className="choice">
        {fish.name}
      </div>
    );
  });

  useEffect(() => {
    if (guesses.length > 0) {
      setAnswers((prevAns) => {
        return prevAns.slice(1);
      });
    }
  }, [guesses]);
  //logs for testing
  // console.log("setCount count: ", count);
  // console.log("fishData at index: ", fishData[count].name);
  // console.log("scoreBoard guesses", guesses);

  return (
    <div id="score-board">
      <div>Incorrect 🔻: {incorrectCount}</div>
      <div id="choices-left">{answersLeft}</div>
      <div>Correct ✅: {correctCount}</div>
    </div>
  );
}
