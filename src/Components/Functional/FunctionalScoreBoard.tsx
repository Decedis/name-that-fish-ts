import "./styles/score-board.css";
//  Where the score is presented

const incorrectCount = 0; //TODO this is a derived value
const correctCount = 0; //TODO this is a derived value
const answersLeft = ["trout", "salmon", "tuna", "shark"]; //TODO this is a derived value

export function FunctionalScoreBoard() {
  return (
    <div id="score-board">
      <div>Incorrect 🔻: {incorrectCount}</div>
      <div id="choices-left">
        {answersLeft.map((answer) => (
          <div key={answer} className="choice">
            {answer}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correctCount}</div>
    </div>
  );
}
