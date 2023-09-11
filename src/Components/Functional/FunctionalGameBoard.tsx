import "./styles/game-board.css";
import { useState } from "react";

type TFishData = {
  name: string;
  url: string;
};

export function FunctionalGameBoard({ fishData }: { fishData: TFishData[] }) {
  const [nextFishToName, setNextFishToName] = useState(0);

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
        }}
      >
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input type="text" name="fish-guess" />
        <input type="submit" />
      </form>
    </div>
  );
}
