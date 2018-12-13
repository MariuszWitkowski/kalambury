import React, { memo, useContext } from "react";
import { QuestionsContext } from "./context/questions";

const Question = memo(() => {
  const { currentQuestion } = useContext(QuestionsContext);
  return currentQuestion ? <div>{currentQuestion.text}</div> : null;
});

export default Question;
