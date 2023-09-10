import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";

export function FunctionalApp() {
  //highest state will live here
  //TODO set state based upon the provided data
  /*
    derived data includes: 
    Score Board: incorrect count, correct count, answers left
    Final Score: correct count, total count
    Game Board: nextFishToGuess
  */
  return (
    <>
      <FunctionalScoreBoard />
      <FunctionalGameBoard />
      {false && <FunctionalFinalScore />}
    </>
  );
}
