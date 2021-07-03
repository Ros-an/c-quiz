import React, { useState } from "react";
import { Heading, Text, Button } from "@chakra-ui/react";
import { useGlobalContext } from "../../context-api/GlobalContext";
import { useNavigate, Navigate } from "react-router-dom";
import Code from "../components/Code";
import "./Quiz.css";
type Obj = {
  condition: string;
  selection: string;
  disable: boolean;
};
function Quiz() {
  const {
    questions,
    index,
    nextQuestion,
    resetIndex,
    correct,
    resetScore,
    increaseScore,
  } = useGlobalContext();
  let navigate = useNavigate();
  const [isRight, setIsRight] = useState<Obj>({
    condition: "",
    selection: "",
    disable: false,
  });

  const { question, category, correct_answer, options, code } =
    questions[index];
  const checkAnswer = (value: string) => {
    if (value === correct_answer) {
      increaseScore();
      setIsRight({
        condition: "right",
        selection: value,
        disable: true,
      });
    } else {
      setIsRight({
        condition: "wrong",
        selection: value,
        disable: true,
      });
    }
  };
  const questionNo = (): number | string => {
    if (index > 8) {
      return index + 1;
    }
    return `0${index + 1}`;
  };
  return (
    <>
      {!questions.length ? (
        <Navigate to="/" replace />
      ) : (
        <section className="quiz">
          <div className="quiz-question">
            <div className="quiz-question__heading">
              <Text fontSize="2xl" className="quizname">
                {category} Quiz
              </Text>
              <div className="sub-section">
                <Heading as="h3">
                  Question{" "}
                  <span className="current-question-no">{questionNo()}</span>
                  <span className="total-question">/{questions.length}</span>
                </Heading>
                <Text fontSize="2xl">
                  Score {`${correct}/${questions.length}`}
                </Text>
              </div>
            </div>
            <div className="quiz-question__body">
              <Text fontSize="1.25rem">{question}</Text>
              {code && <Code code={code} />}
              <div className="options">
                {options.map((option) => {
                  return (
                    <button
                      key={option}
                      className={`answer
                  ${isRight.selection && "btn-style"} 
                  ${
                    option === isRight.selection &&
                    isRight.condition === "right" &&
                    "right"
                  } 
                  ${
                    option === isRight.selection &&
                    isRight.condition === "wrong" &&
                    "wrong"
                  }`}
                      disabled={isRight.disable}
                      onClick={() => checkAnswer(option)}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="quiz-question__footer">
              <Button
                colorScheme="teal"
                variant="ghost"
                className="quit-btn"
                onClick={() => {
                  navigate(`/`);
                  resetIndex();
                  resetScore();
                }}
              >
                <span>
                  <i className="fas fa-power-off"></i>
                </span>{" "}
                <span>Quit Quiz</span>
              </Button>
              <Button
                colorScheme="gray"
                color="black"
                variant="solid"
                onClick={() => {
                  nextQuestion();
                  setIsRight({
                    condition: "",
                    selection: "",
                    disable: false,
                  });
                }}
              >
                Next Question
              </Button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Quiz;
