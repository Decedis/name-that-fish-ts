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
  const [guesses, setGuesses] = useState<string[]>([]);
  const [correctCount, setCorrectCount] = useState(0);

  return (
    <>
      {guesses.length === initialFishes.length ? (
        <FunctionalFinalScore
          totalCount={initialFishes.length}
          correctCount={correctCount}
        />
      ) : (
        <>
          <FunctionalScoreBoard
            fishData={initialFishes}
            guesses={guesses}
            handleCorrectCount={(count) => {
              setCorrectCount(count);
            }}
          />
          <FunctionalGameBoard
            fishData={initialFishes}
            handleGuesses={(retrievedGuess) => {
              setGuesses((prevGuesses) => {
                return [...prevGuesses, retrievedGuess];
              });
            }}
          />
        </>
      )}
    </>
  );
}
