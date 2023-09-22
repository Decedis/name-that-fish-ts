import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { Images } from "../../assets/Images";
import { useState } from "react";

export type TFishData = {
  name: string;
  url: string;
};
const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];

export function FunctionalApp() {
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);

  const fishIndex = correctCount + incorrectCount;
  const answersLeft = initialFishes.slice(fishIndex).map((fish) => fish.name);

  return (
    <>
      {fishIndex === initialFishes.length ? (
        <FunctionalFinalScore
          totalCount={initialFishes.length}
          correctCount={correctCount}
        />
      ) : (
        <>
          <FunctionalScoreBoard
            correctCount={correctCount}
            incorrectCount={incorrectCount}
            answersLeft={answersLeft}
          />
          <FunctionalGameBoard
            fishToName={initialFishes[fishIndex]}
            handleCorrect={setCorrectCount}
            handleIncorrect={setIncorrectCount}
          />
        </>
      )}
    </>
  );
}
