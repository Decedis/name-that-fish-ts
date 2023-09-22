import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import { Images } from "../../assets/Images";

export type TFishData = {
  name: string;
  url: string;
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
type AppState = {
  incorrectCount: number;
  correctCount: number;
};
export class ClassApp extends Component<object, AppState> {
  constructor(props: object) {
    super(props);
    this.state = {
      incorrectCount: 0,
      correctCount: 0,
    };
  }

  render() {
    const { incorrectCount, correctCount } = this.state;
    const fishIndex = correctCount + incorrectCount;
    const answersLeft = initialFishes.slice(fishIndex).map((fish) => fish.name);
    const handleAnswer = (answer: string) => {
      if (answer === initialFishes[fishIndex].name) {
        this.setState({ correctCount: correctCount + 1 });
      } else {
        this.setState({ incorrectCount: incorrectCount + 1 });
      }
    };
    return (
      <>
        {fishIndex === initialFishes.length ? (
          <ClassFinalScore
            totalCount={initialFishes.length}
            correctCount={correctCount}
          />
        ) : (
          <>
            <ClassScoreBoard
              correctCount={correctCount}
              incorrectCount={incorrectCount}
              answersLeft={answersLeft}
            />
            <ClassGameBoard
              fishToName={initialFishes[fishIndex]}
              handleAnswer={handleAnswer}
            />
          </>
        )}
      </>
    );
  }
}
