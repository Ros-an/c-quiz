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
              Solution({questions[0].category.toUpperCase()})
            </Heading>
            <Link to="/">
              <Button colorScheme="blue">Home</Button>
            </Link>
          </div>
          <ol className="solution__body">
            {questions.map((quest, index) => {
              return (
                <li className="question" key={index}>
                  {`${quest.question}`}
                  {quest.code && <pre>{quest.code}</pre>} <br />
                  {`Answer - ${quest.correct_answer}`}
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
