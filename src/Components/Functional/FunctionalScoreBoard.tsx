import { useState } from "react";
import "./styles/score-board.css";
import { TFishData } from "./FunctionalApp";

type TScoreProps = {
  fishData: TFishData[];
  guesses: string[];
  handleCorrectCount: (input: number) => void;
};

export function FunctionalScoreBoard({
  fishData,
  guesses,

  handleCorrectCount,
}: TScoreProps) {
  //const [index, setIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [answers, setAnswers] = useState(fishData);

  const index = guesses.length;
  guesses[index] === fishData[index].name
    ? setCorrectCount((correctCount) => correctCount + 1)
    : setIncorrectCount((incorrectCount) => incorrectCount + 1);

  const answersLeft = answers.map((fish) => {
    return (
      <div key={fish.name} className="choice">
        {fish.name}
      </div>
    );
  });

  if (guesses.length > 0) {
    setAnswers((prevAns) => {
      return prevAns.slice(1);
    });
  }

  if (guesses.length <= fishData.length) {
    handleCorrectCount(correctCount);
  }

  return (
    <div id="score-board">
      <div>Incorrect 🔻: {incorrectCount}</div>
      <div id="choices-left">{answersLeft}</div>
      <div>Correct ✅: {correctCount}</div>
    </div>
  );
}
