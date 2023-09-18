import "./styles/final-score.css";
type TFScore = {
  correctCount: number;
  totalCount: number;
};

export const FunctionalFinalScore = ({ correctCount, totalCount }: TFScore) => (
  <div id="final-score">
    <h1>Your Final Score Was</h1>
    <div id="score">
      <p>{correctCount}</p>
      <hr />
      <p>{totalCount}</p>
    </div>
  </div>
);
