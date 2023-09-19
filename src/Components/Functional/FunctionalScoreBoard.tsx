import { useState, useEffect } from "react";
import "./styles/score-board.css";
import { TFishData } from "./FunctionalApp";

type TScoreProps = {
  fishData: TFishData[];
  guesses: string[];
  handleCorrectCount: (input: number) => void;
};
//  Where the score is presented
let incorrectCount = 0;
let correctCount = 0;

export function FunctionalScoreBoard({
  fishData,
  guesses,
  handleCorrectCount,
}: TScoreProps) {
  const [count, setCount] = useState(0);
  const [answers, setAnswers] = useState(fishData);
  console.log("ScoreBoard guesses: ", guesses);

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

  useEffect(() => {
    if (guesses.length <= fishData.length) {
      console.log("correctCount gathered!!");

      handleCorrectCount(correctCount);
    }
  }, [guesses.length, fishData.length, handleCorrectCount]);

  return (
    <div id="score-board">
      <div>Incorrect 🔻: {incorrectCount}</div>
      <div id="choices-left">{answersLeft}</div>
      <div>Correct ✅: {correctCount}</div>
    </div>
  );
}
