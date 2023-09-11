import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { Images } from "../../assets/Images";

const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];

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
      <FunctionalGameBoard fishData={initialFishes} />
      {false && <FunctionalFinalScore />}
    </>
  );
}
