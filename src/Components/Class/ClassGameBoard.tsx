import { Component } from "react";
import "./styles/game-board.css";
import { TFishData } from "./ClassApp";

type TBoardProps = {
  fishData: TFishData[];
  handleGuesses: (input: string) => void;
  handleCorrect: (input: (prevCount: number) => number) => void;
  handleIncorrect: (input: (prevCount: number) => number) => void;
};
type TBoardState = {
  fishToName: number;
  localGuess: string;
};

export class ClassGameBoard extends Component<TBoardProps, TBoardState> {
  constructor(props: TBoardProps) {
    super(props);
    this.state = {
      fishToName: 0, // Default value for 'fishToName'
      localGuess: "", // Default value for 'localGuess'
    };
  }

  render() {
    const { fishToName, localGuess } = this.state;
    const { fishData, handleGuesses, handleCorrect, handleIncorrect } =
      this.props;
    console.log(fishToName);

    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={fishData[fishToName].url} alt={fishData[fishToName].name} />
        </div>
        <form
          id="fish-guess-form"
          onSubmit={(e) => {
            e.preventDefault();
            this.setState((prevFish) => ({
              fishToName:
                prevFish.fishToName < fishData.length - 1
                  ? prevFish.fishToName + 1
                  : 0,
            }));

            handleGuesses(localGuess);
            localGuess === fishData[fishToName].name
              ? handleCorrect((correctCount) => correctCount + 1)
              : handleIncorrect((incorrectCount) => incorrectCount + 1);
            this.setState({ localGuess: "" });
          }}
        >
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input
            type="text"
            name="fish-guess"
            onChange={(e) => {
              this.setState({ localGuess: e.target.value });
            }}
            value={localGuess}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
