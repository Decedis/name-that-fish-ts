import "./styles/game-board.css";
import { useState } from "react";
import { TFishData } from "./FunctionalApp";

type BoardProps = {
  fishData: TFishData[];
  handleData: (input: string) => void;
};
export function FunctionalGameBoard({ fishData, handleData }: BoardProps) {
  const [nextFishToName, setNextFishToName] = useState(0);
  const [localGuess, setLocalGuess] = useState("");

  return (
    <div id="game-board">
      <div id="fish-container">
        <img
          src={fishData[nextFishToName].url}
          alt={fishData[nextFishToName].name}
        />
      </div>
      <form
        id="fish-guess-form"
        onSubmit={(e) => {
          e.preventDefault();
          setNextFishToName((prevFish) => {
            return prevFish < fishData.length - 1 ? prevFish + 1 : 0;
          });
          handleData(localGuess);
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
