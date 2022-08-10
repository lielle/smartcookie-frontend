import { useState } from "react";
import "./quiz.css";

const Quiz = ({ question, choices, answer, handleCorrectAnswer }) => {
  const [isWrongAnswer, setIsWrongAnswer] = useState(false);
  const checkAnswer = (choice) => {
    if (choice === answer) {
      handleCorrectAnswer();
    } else {
      setIsWrongAnswer(true);
    }
  };

  return (
    <div>
      <div>{question}</div>
      <div className="quiz-choices">
        {choices.map(
          (choice) => (
            <button
              className="quiz-choice"
              key={choice}
              onClick={() => checkAnswer(choice)}
            >
              {choice}
            </button>
          ),
          choices
        )}
      </div>
      <div className="quiz-wrong-label">{isWrongAnswer ? "Try again!" : null}</div>
    </div>
  );
};

export default Quiz;
