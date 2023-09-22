import { Component } from "react";
import "./styles/score-board.css";

type TScoreProps = {
  correctCount: number;
  incorrectCount: number;
  answersLeft: string[];
};
export class ClassScoreBoard extends Component<TScoreProps> {
  render() {
    const { correctCount, incorrectCount, answersLeft } = this.props;
    return (
      <div id="score-board">
        <div>Incorrect 🔻: {incorrectCount}</div>
        <div id="choices-left">
          {answersLeft.map((fish) => (
            <div key={fish} className="choice">
              {fish}
            </div>
          ))}
        </div>
        <div>Correct ✅: {correctCount}</div>
      </div>
    );
  }
}
