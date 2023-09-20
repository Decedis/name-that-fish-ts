import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import { Images } from "../../assets/Images";

export type TFishData = {
  name: string;
  url: string;
};
type AppState = {
  guesses: Array<string>;
  incorrectCount: number;
  correctCount: number;
};
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
export class ClassApp extends Component<object, AppState> {
  constructor(props: object) {
    super(props);
    this.state = {
      guesses: [],
      incorrectCount: 0,
      correctCount: 0,
    };
  }

  render() {
    const { guesses, incorrectCount, correctCount } = this.state;
    return (
      <>
        {guesses.length === initialFishes.length ? (
          <ClassFinalScore
            totalCount={initialFishes.length}
            correctCount={this.state.correctCount}
          />
        ) : (
          <>
            <ClassScoreBoard
              correctCount={correctCount}
              incorrectCount={incorrectCount}
              answersLeft={initialFishes.slice(correctCount + incorrectCount)}
            />
            <ClassGameBoard
              fishData={initialFishes}
              handleGuesses={(retrievedGuess: string) => {
                this.setState((prevGuesses) => ({
                  guesses: [...prevGuesses.guesses, retrievedGuess],
                }));
              }}
              handleCorrect={() => {
                this.setState((prevCount) => ({
                  correctCount: prevCount.correctCount + 1,
                }));
              }}
              handleIncorrect={() => {
                this.setState((prevCount) => ({
                  incorrectCount: prevCount.incorrectCount + 1,
                }));
              }}
            />
          </>
        )}
      </>
    );
  }
}
