import "./styles/game-board.css";
import { useState } from "react";
import { TFishData } from "./FunctionalApp";

type BoardProps = {
  fishData: TFishData[];
  handleGuesses: (input: string) => void;
  handleCorrect: (input: (prevCount: number) => number) => void;
  handleIncorrect: (input: (prevCount: number) => number) => void; //input accepts past number value and returns a number into the outer func which returns void.
};
export function FunctionalGameBoard({
  fishData,
  handleGuesses,
  handleCorrect,
  handleIncorrect,
}: BoardProps) {
  const [fishToName, setFishToName] = useState(0);
  const [localGuess, setLocalGuess] = useState("");

  return (
    <div id="game-board">
      <div id="fish-container">
        <img alt={fishData[fishToName].name} src={fishData[fishToName].url} />
      </div>
      <form
        id="fish-guess-form"
        onSubmit={(e) => {
          e.preventDefault();
          setFishToName((prevFish) => {
            return prevFish < fishData.length - 1 ? prevFish + 1 : 0;
          });
          console.log(
            "localGuess[fishToName] === fishData[fishToName].name ::",
            localGuess[fishToName] === fishData[fishToName].name
          );
          handleGuesses(localGuess);
          localGuess === fishData[fishToName].name
            ? handleCorrect((correctCount) => correctCount + 1)
            : handleIncorrect((incorrectCount) => incorrectCount + 1);
          setLocalGuess("");
        }}
      >
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          onChange={(e) => {
            setLocalGuess(e.target.value);
          }}
          value={localGuess}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
