import React, { createContext } from "react";

const QuestionsContext = React.createContext({
  groups: [],
  elemensts: [],
  currentQuestion: null,
  start: () => {}
});

const QuestionsConsumer = QuestionsContext.Consumer;

class QuestionsProvider extends React.Component {
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
      <QuestionsContext.Provider value={this.state}>
        {this.props.children}
      </QuestionsContext.Provider>
    );
  }
}

export { QuestionsContext, QuestionsConsumer, QuestionsProvider };
