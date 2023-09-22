import "./styles/game-board.css";
import { FormEvent, useState } from "react";
import { TFishData } from "./FunctionalApp";

type BoardProps = {
  fishToName: TFishData;

  handleCorrect: (input: (prevCount: number) => number) => void;
  handleIncorrect: (input: (prevCount: number) => number) => void; //input accepts past number value and returns a number into the outer func which returns void.
};
export function FunctionalGameBoard({
  fishToName,
  handleCorrect,
  handleIncorrect,
}: BoardProps) {
  const [localGuess, setLocalGuess] = useState("");

  const handleAnswer = (answer: string) => {
    if (localGuess === fishToName.name) {
    }
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    localGuess === fishToName.name
      ? handleCorrect((correctCount) => correctCount + 1)
      : handleIncorrect((incorrectCount) => incorrectCount + 1);
    setLocalGuess("");
  };
  return (
    <div id="game-board">
      <div id="fish-container">
        <img alt={fishToName.name} src={fishToName.url} />
      </div>
      <form id="fish-guess-form" onSubmit={handleSubmit}>
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
