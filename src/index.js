import React from "react";
import ReactDOM from "react-dom";

import { QuestionsConsumer, QuestionsProvider } from "./context/questions";

import GameScene from "./GameScene";
import Question from "./Question";

import "./styles.css";

function App() {
  return (
    <QuestionsProvider>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <Question />
        <QuestionsConsumer>
          {questionState => (
            <button onClick={questionState.start}>Start</button>
          )}
        </QuestionsConsumer>
        <GameScene />
      </div>
    </QuestionsProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
