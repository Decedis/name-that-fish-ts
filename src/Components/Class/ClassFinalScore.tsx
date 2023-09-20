import { Component } from "react";

type TFScoreProps = {
  correctCount: number;
  totalCount: number;
};

export class ClassFinalScore extends Component<TFScoreProps> {
  render() {
    const { correctCount, totalCount } = this.props;
    return (
      <div id="final-score">
        <h1>Your Final Score Was</h1>
        <div id="score">
          <p>{correctCount}</p>
          <hr />
          <p>{totalCount}</p>
        </div>
      </div>
    );
  }
}
