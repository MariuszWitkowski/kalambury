import React, { createContext } from "react";

const GameContext = React.createContext({
  groups: [],
  elemensts: [],
  currentQuestion: null,
  start: () => {}
});

const GameConsumer = GameContext.Consumer;

class GameProvider extends React.Component {
  componentDidMount() {
    this.setState({
      elemensts: [
        {
          group: "animal",
          text: "krowa"
        },
        {
          group: "animal",
          text: "pies"
        },
        {
          group: "animal",
          text: "kot"
        }
      ]
    });
  }

  start = () => {
    this.setState(prevState => ({
      currentQuestion: prevState.elemensts[0]
    }));
  };

  state = {
    groups: [],
    elemensts: [],
    currentQuestion: null,
    start: this.start
  };

  render() {
    return (
      <GameContext.Provider value={this.state}>
        {this.props.children}
      </GameContext.Provider>
    );
  }
}

export { GameContext, GameConsumer, GameProvider };
