import "./styles/score-board.css";
import { TFishData } from "./FunctionalApp";

type TScoreProps = {
  correctCount: number;
  incorrectCount: number;
  answersLeft: TFishData[];
};

export function FunctionalScoreBoard({
  correctCount,
  incorrectCount,
  answersLeft,
}: TScoreProps) {
  return (
    <div id="score-board">
      <div>Incorrect 🔻: {incorrectCount}</div>
      <div id="choices-left">
        {answersLeft.map((fish) => {
          return (
            <div key={fish.name} className="choice">
              {fish.name}
            </div>
          );
        })}
      </div>
      <div>Correct ✅: {correctCount}</div>
    </div>
  );
}
