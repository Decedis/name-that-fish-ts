import { Component } from "react";
import "./styles/score-board.css";
import { TFishData } from "./ClassApp";

type TScoreProps = {
  correctCount: number;
  incorrectCount: number;
  answersLeft: TFishData[];
};
export class ClassScoreBoard extends Component<TScoreProps> {
  render() {
    const { correctCount, incorrectCount, answersLeft } = this.props;
    return (
      <div id="score-board">
        <div>Incorrect 🔻: {incorrectCount}</div>
        <div id="choices-left">
          {answersLeft.map((answer) => (
            <div key={answer.name} className="choice">
              {answer.name}
            </div>
          ))}
        </div>
        <div>Correct ✅: {correctCount}</div>
      </div>
    );
  }
}
