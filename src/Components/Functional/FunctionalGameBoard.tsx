import "./styles/game-board.css";
import { FormEvent, useState } from "react";
import { TFishData } from "./FunctionalApp";

type BoardProps = {
  fishToName: TFishData;
  handleAnswer: (answer: string) => void;
};
export function FunctionalGameBoard({ fishToName, handleAnswer }: BoardProps) {
  const [localGuess, setLocalGuess] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleAnswer(localGuess);
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
