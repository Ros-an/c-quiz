import React from "react";
import { Heading, Button } from "@chakra-ui/react";
import { useGlobalContext } from "../../context-api/GlobalContext";
import { Navigate, Link } from "react-router-dom";
import "./Solutions.css";

function Solutions() {
  const { questions } = useGlobalContext();
  return (
    <div className="solution">
      {!questions.length ? (
        <Navigate to="/" replace />
      ) : (
        <>
          <div className="solution__heading">
            <Heading as="h2">
              Solution <br /> ({questions[0].category.toUpperCase()})
            </Heading>
            <Link to="/">
              <Button colorScheme="teal">
                <i className="fas fa-home"></i>
              </Button>
            </Link>
          </div>
          <ol className="solution__body">
            {questions.map((quest, index) => {
              return (
                <li className="question" key={index}>
                  {`${quest.question}`} <br />
                  {quest.code && (
                    <div className="code">
                      <pre>{quest.code}</pre>
                    </div>
                  )}
                  <ul className="options">
                    {quest.options.map((opt, index) => (
                      <li key={index}>{opt}</li>
                    ))}
                  </ul>
                  <strong>Answer:</strong> <br />
                  {`${quest.correct_answer}`}
                </li>
              );
            })}
          </ol>
        </>
      )}
    </div>
  );
}

export default Solutions;
