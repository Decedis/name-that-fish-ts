import "./styles/score-board.css";

type TScoreProps = {
  correctCount: number;
  incorrectCount: number;
  answersLeft: string[];
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
            <div key={fish} className="choice">
              {fish}
            </div>
          );
        })}
      </div>
      <div>Correct ✅: {correctCount}</div>
    </div>
  );
}
