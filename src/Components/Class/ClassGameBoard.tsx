import { Component, FormEvent } from "react";
import "./styles/game-board.css";
import { TFishData } from "./ClassApp";

type TBoardProps = {
  fishToName: TFishData;
  handleAnswer: (answer: string) => void;
};
type TBoardState = {
  localGuess: string;
};

export class ClassGameBoard extends Component<TBoardProps, TBoardState> {
  constructor(props: TBoardProps) {
    super(props);
    this.state = {
      localGuess: "", // Default value for 'localGuess'
    };
  }

  render() {
    const { localGuess } = this.state;
    const { fishToName, handleAnswer } = this.props;
    const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
      handleAnswer(localGuess);
      this.setState({ localGuess: "" });
    };
    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={fishToName.url} alt={fishToName.name} />
        </div>
        <form id="fish-guess-form" onSubmit={handleSubmit}>
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
